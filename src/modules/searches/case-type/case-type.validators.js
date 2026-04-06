"use strict";

const { firstDefined } = require("../../../shared/utils/common.util");
const { MESSAGES } = require("./case-type.constants");

function validateCaseData(req, res, next) {
  const caseType = firstDefined(
    req.body.caseType,
    req.body.case_type,
    req.body.case_type_1,
  );
  const searchYear = firstDefined(req.body.searchYear, req.body.search_year);
  const caseStatus = firstDefined(req.body.caseStatus, req.body.case_status);
  const captchaCode = firstDefined(req.body.captchaCode, req.body.ct_captcha_code);

  if (!req.body.sessionId || !caseType || !searchYear || !caseStatus || !captchaCode) {
    return res.status(400).json({
      success: false,
      status: 0,
      error: MESSAGES.MISSING_CASE_DATA_FIELDS,
    });
  }

  return next();
}

function validateCaseTypes(req, res, next) {
  const body = req.body || {};
  const query = req.query || {};
  const sessionId = firstDefined(body.sessionId, query.sessionId);
  const stateCode = firstDefined(
    body.stateCode,
    body.state_code,
    query.stateCode,
    query.state_code,
  );
  const distCode = firstDefined(
    body.distCode,
    body.dist_code,
    query.distCode,
    query.dist_code,
  );
  const courtComplexCode = firstDefined(
    body.courtComplexCode,
    body.court_complex_code,
    query.courtComplexCode,
    query.court_complex_code,
  );

  if (!sessionId || !stateCode || !distCode || !courtComplexCode) {
    return res.status(400).json({
      success: false,
      status: 0,
      error: MESSAGES.MISSING_CASE_TYPE_FIELDS,
    });
  }

  return next();
}

module.exports = {
  validateCaseTypes,
  validateCaseData,
};
