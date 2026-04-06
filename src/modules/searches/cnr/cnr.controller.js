"use strict";

const { firstDefined, sendJsonSuccess } = require("../common/utils/common");
const { getSession } = require("../common/store/sessionStore");
const { fetchCnrSearch, fetchCaptchaPayload } = require("./cnr.service");
const { MESSAGES } = require("./cnr.constants");

function buildOrderPdfProxy(sessionId, pdfParams) {
  if (!sessionId || !pdfParams?.normal_v || !pdfParams?.case_val || !pdfParams?.court_code || !pdfParams?.filename) {
    return "";
  }

  const query = new URLSearchParams({
    sessionId: String(sessionId),
    normal_v: String(pdfParams.normal_v),
    case_val: String(pdfParams.case_val),
    court_code: String(pdfParams.court_code),
    filename: String(pdfParams.filename),
    appFlag: String(firstDefined(pdfParams.appFlag, pdfParams.app_flag, "")),
  });

  return `/api/partyname/order-pdf?${query.toString()}`;
}

function attachOrderPdfProxy(caseDetail, sessionId) {
  if (!caseDetail) {
    return caseDetail;
  }

  const attachToOrders = (orders) => {
    if (!Array.isArray(orders)) return orders;
    return orders.map((order) => {
      if (!order?.pdf_params) return order;
      return {
        ...order,
        pdfProxy: buildOrderPdfProxy(sessionId, order.pdf_params),
      };
    });
  };

  caseDetail.interim_orders = attachToOrders(caseDetail.interim_orders);
  caseDetail.final_orders = attachToOrders(caseDetail.final_orders);

  return caseDetail;
}

function sanitizeCaseDetailResponse(caseDetail) {
  if (!caseDetail || typeof caseDetail !== "object") {
    return caseDetail;
  }

  const sanitizeOrders = (orders) => {
    if (!Array.isArray(orders)) return orders;
    return orders.map((order) => {
      if (!order || typeof order !== "object") return order;
      const { pdf_params, order_onclick, order_href, ...rest } = order;
      return rest;
    });
  };

  const sanitizeHistory = (history) => {
    if (!Array.isArray(history)) return history;
    return history.map((entry) => {
      if (!entry || typeof entry !== "object") return entry;
      const { business_on_date_onclick, ...rest } = entry;
      return rest;
    });
  };

  const sanitizeIaStatus = (iaStatus) => {
    if (!Array.isArray(iaStatus)) return iaStatus;
    return iaStatus.map((entry) => {
      if (!entry || typeof entry !== "object") return entry;
      const { ia_onclick, ...rest } = entry;
      return rest;
    });
  };

  return {
    ...caseDetail,
    ia_status: sanitizeIaStatus(caseDetail.ia_status),
    history_of_case_hearing: sanitizeHistory(caseDetail.history_of_case_hearing),
    interim_orders: sanitizeOrders(caseDetail.interim_orders),
    final_orders: sanitizeOrders(caseDetail.final_orders),
  };
}

function buildCaseDetailSections(caseDetail) {
  const safe = caseDetail || {};

  return {
    court_header: {
      court_name: safe.court_name || "",
    },
    case_details: {
      case_type: safe.case_type || "",
      filing_number: safe.filing_number || "",
      filing_date: safe.filing_date || "",
      registration_number: safe.registration_number || "",
      registration_date: safe.registration_date || "",
      cnr_number: safe.cnr_number || "",
      e_filing_number: firstDefined(safe.e_filing_number, safe.efiling_number, ""),
      e_filing_date: firstDefined(safe.e_filing_date, safe.efiling_date, ""),
    },
    case_status: {
      first_hearing_date: safe.first_hearing_date || "",
      decision_date: safe.decision_date || "",
      next_hearing_date: safe.next_hearing_date || "",
      case_status: safe.case_status || "",
      nature_of_disposal: safe.nature_of_disposal || "",
      case_stage: safe.case_stage || "",
      court_number_and_judge: safe.court_number_and_judge || "",
    },
    petitioner_and_advocate: {
      entries: Array.isArray(safe.petitioners) ? safe.petitioners : [],
    },
    respondent_and_advocate: {
      entries: Array.isArray(safe.respondents) ? safe.respondents : [],
    },
    acts: Array.isArray(safe.acts) ? safe.acts : [],
    ia_status: Array.isArray(safe.ia_status) ? safe.ia_status : [],
    case_history: Array.isArray(safe.history_of_case_hearing)
      ? safe.history_of_case_hearing
      : [],
    interim_orders: Array.isArray(safe.interim_orders) ? safe.interim_orders : [],
    final_orders: Array.isArray(safe.final_orders) ? safe.final_orders : [],
    connected_cases: Array.isArray(safe.connected_cases) ? safe.connected_cases : [],
  };
}

async function search(req, res) {
  const sessionId = req.body.sessionId;
  const cino = firstDefined(req.body.cino, req.body.cnrNumber, req.body.cnr_number)
    .toString()
    .trim()
    .toUpperCase();
  const captchaCode = firstDefined(req.body.captchaCode, req.body.fcaptcha_code);

  if (!sessionId) {
    return res.status(400).json({ success: false, error: MESSAGES.MISSING_SESSION_ID });
  }

  try {
    const session = getSession(sessionId);
    const cnrResponse = await fetchCnrSearch(session, { cino, captchaCode });

    let nextCaptcha = null;
    try {
      nextCaptcha = await fetchCaptchaPayload(session, { warm: true });
    } catch (_captchaErr) {
      nextCaptcha = null;
    }

    if (!cnrResponse.html) {
      return res.status(422).json({
        success: false,
        status: 0,
        error: MESSAGES.EMPTY_CNR_RESPONSE,
        nextCaptcha,
      });
    }

    const caseDetailResult = sanitizeCaseDetailResponse(
      attachOrderPdfProxy(cnrResponse.parsed, sessionId),
    );

    return sendJsonSuccess(res, {
      message: MESSAGES.CNR_CASE_FETCHED,
      result: buildCaseDetailSections(caseDetailResult),
      rawHtml: cnrResponse.html,
    });
  } catch (err) {
    const statusCode = err.message === "Invalid CAPTCHA" ? 422 : 500;
    return res.status(statusCode).json({
      success: false,
      status: 0,
      error: err.message,
    });
  }
}

module.exports = {
  search,
};
