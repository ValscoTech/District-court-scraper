"use strict";

const {
  coerceBoolean,
  firstDefined,
  sendJsonSuccess,
} = require("../../../shared/utils/common.util");
const { getSession } = require("../../../shared/store/sessionStore");
const { setCourtDetails } = require("../../portal/portal.service");
const { parseCaseDetail } = require("../party-name/parsers");
const { MESSAGES } = require("./case-type.constants");
const {
  buildCaseTypeSearchSuccessResponse,
  fetchCaseTypes,
  fetchCaptchaPayload,
  fetchDisplayPdf,
  fetchIABusiness,
  fetchViewBusiness,
  fetchViewHistory,
  normalizeCaseTypeSearchResponse,
  parsePartyNameResults,
  postWithRetry,
} = require("./case-type.service");

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

function buildCaseTypeResponse(options) {
  const list = (options || []).map((item) => ({
    code: String(item.code || "").trim(),
    options: String(item.name || "").trim(),
  }));

  const name = {};
  list.forEach((item) => {
    if (item.options && item.code) {
      name[item.options] = item.code;
    }
  });

  return { list, name };
}

function cleaned(value, fallback = "") {
  const raw = firstDefined(value, fallback);
  return String(raw || "").trim();
}

function normalizeContextValue(value, fallback = "") {
  const normalized = cleaned(value, fallback);
  return normalized || "";
}

async function caseTypes(req, res) {
  const body = req.body || {};
  const query = req.query || {};
  const sessionId = cleaned(firstDefined(body.sessionId, query.sessionId));
  const stateCode = cleaned(firstDefined(
    body.stateCode,
    body.state_code,
    query.stateCode,
    query.state_code,
  ));
  const distCode = cleaned(firstDefined(
    body.distCode,
    body.dist_code,
    query.distCode,
    query.dist_code,
  ));
  const courtComplexCode = cleaned(firstDefined(
    body.courtComplexCode,
    body.court_complex_code,
    query.courtComplexCode,
    query.court_complex_code,
  ));
  const estCode = cleaned(firstDefined(
    body.estCode,
    body.est_code,
    query.estCode,
    query.est_code,
    "",
  ));
  const searchType = cleaned(firstDefined(
    body.searchType,
    body.search_type,
    query.searchType,
    query.search_type,
    "c_type",
  ));

  try {
    const session = getSession(sessionId);
    if (stateCode && distCode && courtComplexCode) {
      await setCourtDetails(session, {
        complexCode: courtComplexCode,
        stateCode,
        distCode,
        estCode: estCode || "null",
      });
    }
    const payload = await fetchCaseTypes(session, {
      stateCode,
      distCode,
      courtComplexCode,
      estCode,
      searchType,
    });
    const optionResponse = buildCaseTypeResponse(payload.options);

    return sendJsonSuccess(res, {
      message: MESSAGES.CASE_TYPES_FETCHED,
      result: {
        state_code: String(stateCode),
        dist_code: String(distCode),
        court_complex_code: String(courtComplexCode),
        est_code: String(estCode),
        search_type: String(searchType),
        case_types: optionResponse.list,
        name: optionResponse.name,
      },
      rawHtml: payload.rawHtml,
    });
  } catch (err) {
    return res.status(500).json({ success: false, status: 0, error: err.message });
  }
}

async function caseData(req, res) {
  const sessionId = cleaned(req.body.sessionId);
  const stateCode = cleaned(firstDefined(req.body.stateCode, req.body.state_code));
  const distCode = cleaned(firstDefined(req.body.distCode, req.body.dist_code));
  const estCode = cleaned(firstDefined(req.body.estCode, req.body.est_code));
  const caseType = cleaned(firstDefined(
    req.body.caseType,
    req.body.case_type,
    req.body.case_type_1,
  ));
  const searchYear = cleaned(firstDefined(req.body.searchYear, req.body.search_year));
  const caseStatus = cleaned(firstDefined(req.body.caseStatus, req.body.case_status, "Pending"));
  const captchaCode = cleaned(firstDefined(req.body.captchaCode, req.body.ct_captcha_code));
  const courtComplexCode = cleaned(firstDefined(
    req.body.courtComplexCode,
    req.body.court_complex_code,
  ));
  const fetchDetails = coerceBoolean(req.body.fetchDetails, false);
  const fetchIABusinessFlag = coerceBoolean(req.body.fetchIABusiness, false);
  const fetchBusinessFlag = coerceBoolean(req.body.fetchBusiness, false);
  const fetchPdf = coerceBoolean(req.body.fetchPdf, false);

  if (!sessionId || !caseType || !searchYear || !caseStatus || !captchaCode) {
    return res.status(400).json({
      success: false,
      status: 0,
      error: MESSAGES.MISSING_CASE_DATA_FIELDS,
    });
  }

  try {
    const session = getSession(sessionId);
    const resolvedState = stateCode || session.stateCode;
    const resolvedDist = distCode || session.distCode;
    const resolvedComplex = courtComplexCode || session.complexCode;
    const resolvedEst = estCode || session.estCode || "null";

    if (!resolvedState || !resolvedDist || !resolvedComplex) {
      return res.status(400).json({
        success: false,
        status: 0,
        error: MESSAGES.COURT_DETAILS_NOT_SET,
      });
    }

    const sessionState = normalizeContextValue(session.stateCode);
    const sessionDist = normalizeContextValue(session.distCode);
    const sessionComplex = normalizeContextValue(session.complexCode);
    const sessionEst = normalizeContextValue(session.estCode || "null", "null");
    const requestEst = normalizeContextValue(resolvedEst || "null", "null");

    const contextMissing =
      !sessionState || !sessionDist || !sessionComplex;
    const contextChanged =
      sessionState !== normalizeContextValue(resolvedState) ||
      sessionDist !== normalizeContextValue(resolvedDist) ||
      sessionComplex !== normalizeContextValue(resolvedComplex) ||
      sessionEst !== requestEst;

    if (contextMissing || contextChanged) {
      await setCourtDetails(session, {
        complexCode: resolvedComplex,
        stateCode: resolvedState,
        distCode: resolvedDist,
        estCode: requestEst,
      });
    }

    let layer1Data;
    try {
      layer1Data = await postWithRetry(session, "casestatus/submit_case_type", {
        p: "casestatus/submit_case_type",
        case_type_1: caseType,
        search_year: searchYear,
        case_status: caseStatus,
        ct_captcha_code: captchaCode,
        state_code: resolvedState,
        dist_code: resolvedDist,
        court_complex_code: resolvedComplex,
        est_code: resolvedEst,
      });
    } catch (err) {
      let nextCaptcha = null;
      try {
        nextCaptcha = await fetchCaptchaPayload(session, { warm: true });
      } catch (_captchaErr) {
        nextCaptcha = null;
      }

      const statusCode = err.message === "Invalid CAPTCHA" ? 422 : 500;
      return res.status(statusCode).json({
        success: false,
        status: 0,
        error: err.message,
        nextCaptcha,
      });
    }

    console.log("=== ECOURTS LAYER 1 RESPONSE ===");
    console.log(JSON.stringify(layer1Data, null, 2));
    console.log("================================");

    const normalizedSearch = normalizeCaseTypeSearchResponse(layer1Data);
    const layer1Html = normalizedSearch.html || "";

    let nextCaptcha = null;
    try {
      nextCaptcha = await fetchCaptchaPayload(session, { warm: true });
    } catch (_captchaErr) {
      nextCaptcha = null;
    }

    if (!layer1Html && normalizedSearch.upstreamStatus !== 1) {
      return res.status(422).json({
        success: false,
        status: 0,
        error: MESSAGES.EMPTY_SEARCH_RESPONSE,
        nextCaptcha,
      });
    }

    if (!layer1Html) {
      return res.status(422).json({
        success: false,
        status: 0,
        error: MESSAGES.EMPTY_CASE_DATA_RESPONSE,
        nextCaptcha,
      });
    }

    const { cases, metadata, courtBreakdown } = parsePartyNameResults(layer1Html);

    if (!fetchDetails) {
      return sendJsonSuccess(
        res,
        buildCaseTypeSearchSuccessResponse({
          normalizedSearch,
          layer1Html,
          cases,
          metadata,
          courtBreakdown,
          resolvedState,
          resolvedDist,
          resolvedComplex,
        }),
      );
    }

    const enrichedCases = [];
    for (const currentCase of cases) {
      const viewDetails = currentCase.viewDetails;
      if (!viewDetails?.caseNo) {
        enrichedCases.push(currentCase);
        continue;
      }

      let caseDetail = {};
      try {
        const detailHtml = await fetchViewHistory(session, {
          caseNo: viewDetails.caseNo,
          cino: viewDetails.cino,
          courtCode: viewDetails.courtCode,
          hideparty: viewDetails.hideparty,
          searchFlag: viewDetails.searchFlag || "CScaseNumber",
          stateCode: viewDetails.stateCode || resolvedState,
          distCode: viewDetails.distCode || resolvedDist,
          complexCode: viewDetails.complexCode || resolvedComplex,
          searchBy: viewDetails.searchBy || "CScaseType",
        });

        caseDetail = sanitizeCaseDetailResponse(parseCaseDetail(detailHtml));

        if (fetchIABusinessFlag && Array.isArray(caseDetail.ia_status)) {
          for (const ia of caseDetail.ia_status) {
            if (!ia.ia_params?.ia_no) continue;
            try {
              const iaBusinessResponse = await fetchIABusiness(
                session,
                {
                  ...ia.ia_params,
                  search_by: ia.ia_params.search_by || "CScaseType",
                },
                viewDetails.cino,
              );
              ia.ia_business = iaBusinessResponse.result;
              ia.ia_business_rawHtml = iaBusinessResponse.rawHtml;
            } catch (error) {
              ia.ia_business = { error: error.message };
            }
          }
        }

        if (fetchBusinessFlag && Array.isArray(caseDetail.history_of_case_hearing)) {
          for (const historyRow of caseDetail.history_of_case_hearing) {
            if (!historyRow.business_params?.businessDate) continue;
            try {
              historyRow.business_detail = await fetchViewBusiness(
                session,
                {
                  ...historyRow.business_params,
                  search_by:
                    historyRow.business_params.search_by || "CScaseType",
                },
                viewDetails.cino,
              );
            } catch (error) {
              historyRow.business_detail = { error: error.message };
            }
          }
        }

        if (fetchPdf) {
          const orderGroups = [caseDetail.interim_orders, caseDetail.final_orders];
          for (const orders of orderGroups) {
            if (!Array.isArray(orders)) continue;
            for (const order of orders) {
              if (!order.pdf_params?.normal_v) continue;
              try {
                order.pdf = await fetchDisplayPdf(session, order.pdf_params);
              } catch (error) {
                order.pdf = { error: error.message };
              }
            }
          }
        }
      } catch (error) {
        caseDetail = { error: `Failed to fetch details: ${error.message}` };
      }

      enrichedCases.push({
        ...currentCase,
        details: caseDetail,
      });
    }

    const payload = buildCaseTypeSearchSuccessResponse({
      normalizedSearch,
      layer1Html,
      cases: enrichedCases,
      metadata,
      courtBreakdown,
      resolvedState,
      resolvedDist,
      resolvedComplex,
    });
    payload.result.parsedCases = enrichedCases;

    return sendJsonSuccess(res, payload);
  } catch (err) {
    return res.status(500).json({ success: false, status: 0, error: err.message });
  }
}

module.exports = {
  caseTypes,
  caseData,
};
