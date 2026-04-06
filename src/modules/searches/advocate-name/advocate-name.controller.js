"use strict";

const {
  coerceBoolean,
  firstDefined,
  sendJsonSuccess,
} = require("../../../shared/utils/common.util");
const { getSession } = require("../../../shared/store/sessionStore");
const { parseCaseDetail } = require("../party-name/parsers");
const { MESSAGES } = require("./advocate-name.constants");
const {
  buildAdvocateNameSearchSuccessResponse,
  fetchCaptchaPayload,
  fetchDisplayPdf,
  fetchIABusiness,
  fetchViewBusiness,
  fetchViewHistory,
  normalizeAdvocateNameSearchResponse,
  parseAdvocateNameResults,
  postWithRetry,
} = require("./advocate-name.service");

async function caseData(req, res) {
  const { sessionId, stateCode, distCode, estCode } = req.body;
  const advocateName = firstDefined(req.body.advocateName, req.body.advocate_name);
  const caseStatus = firstDefined(req.body.caseStatus, req.body.case_status, "Pending");
  const captchaCode = firstDefined(req.body.captchaCode, req.body.adv_captcha_code);
  const courtComplexCode = firstDefined(
    req.body.courtComplexCode,
    req.body.court_complex_code,
  );
  const fetchDetails = coerceBoolean(req.body.fetchDetails, false);
  const fetchIABusinessFlag = coerceBoolean(req.body.fetchIABusiness, false);
  const fetchBusinessFlag = coerceBoolean(req.body.fetchBusiness, false);
  const fetchPdf = coerceBoolean(req.body.fetchPdf, false);

  if (!sessionId || !advocateName || !captchaCode) {
    return res.status(400).json({
      success: false,
      status: 0,
      error: MESSAGES.MISSING_ADVOCATE_DATA_FIELDS,
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

    let layer1Data;
    try {
      layer1Data = await postWithRetry(session, "casestatus/submitAdvName", {
        radAdvt: "1",
        advocate_name: advocateName,
        adv_bar_state: "",
        adv_bar_code: "",
        adv_bar_year: "",
        case_status: caseStatus,
        caselist_date: req.body.caselist_date || "",
        adv_captcha_code: captchaCode,
        state_code: resolvedState,
        dist_code: resolvedDist,
        court_complex_code: resolvedComplex,
        est_code: resolvedEst,
        case_type: "",
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

    const normalizedSearch = normalizeAdvocateNameSearchResponse(layer1Data);
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
        error: MESSAGES.EMPTY_ADVOCATE_DATA_RESPONSE,
        nextCaptcha,
      });
    }

    const { cases, metadata, courtBreakdown } = parseAdvocateNameResults(layer1Html);

    if (!fetchDetails) {
      return sendJsonSuccess(
        res,
        buildAdvocateNameSearchSuccessResponse({
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

    const payload = buildAdvocateNameSearchSuccessResponse({
      normalizedSearch,
      layer1Html,
      cases,
      metadata,
      courtBreakdown,
      resolvedState,
      resolvedDist,
      resolvedComplex,
    });

    return sendJsonSuccess(res, payload);
  } catch (err) {
    return res.status(500).json({ success: false, status: 0, error: err.message });
  }
}

module.exports = {
  caseData,
};
