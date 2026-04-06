"use strict";

const { firstDefined } = require("../../../shared/utils/common.util");
const { MESSAGES } = require("./filing-number.constants");

function validateCaseTypes(req, res, next) {
  const sessionId = firstDefined(req.body.sessionId, req.query.sessionId);
  const stateCode = firstDefined(
    req.body.stateCode,
    req.body.state_code,
    req.query.stateCode,
    req.query.state_code,
  );
  const distCode = firstDefined(
    req.body.distCode,
    req.body.dist_code,
    req.query.distCode,
    req.query.dist_code,
  );
  const courtComplexCode = firstDefined(
    req.body.courtComplexCode,
    req.body.court_complex_code,
    req.query.courtComplexCode,
    req.query.court_complex_code,
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

function validateCaseData(req, res, next) {
  const filingNo = firstDefined(req.body.filingNo, req.body.filing_no, req.body.filing_no_value);
  const captchaCode = firstDefined(
    req.body.captchaCode,
    req.body.file_captcha_code,
  );

  if (!req.body.sessionId || !filingNo || !req.body.filyear || !captchaCode) {
    return res.status(400).json({
      success: false,
      status: 0,
      error: MESSAGES.MISSING_FILING_DATA_FIELDS,
    });
  }

  return next();
}

module.exports = {
  validateCaseTypes,
  validateCaseData,
};
