"use strict";

const { COMMON_MESSAGES } = require("./portal.constants");
const { firstDefined } = require("../../shared/utils/common.util");

function validateInit(_req, _res, next) {
  next();
}

function validateSetFields(req, res, next) {
  const body = req.body || {};
  const sessionId = body.sessionId;
  const complexCode = firstDefined(
    body.complexCode,
    body.complex_code,
    body.complex_number,
  );
  const stateCode = firstDefined(body.stateCode, body.state_code);
  const distCode = firstDefined(body.distCode, body.dist_code);

  if (!sessionId || !complexCode || !stateCode || !distCode) {
    return res.status(400).json({ success: false, error: COMMON_MESSAGES.MISSING_SET_FIELDS });
  }
  return next();
}

function validateSessionIdQuery(req, res, next) {
  if (!req.query.sessionId) {
    return res.status(400).json({ success: false, error: COMMON_MESSAGES.MISSING_SESSION_ID });
  }
  return next();
}

function validateDistricts(req, res, next) {
  const body = req.body || {};
  const query = req.query || {};
  const sessionId = firstDefined(body.sessionId, query.sessionId);
  const stateCode = firstDefined(body.stateCode, body.state_code, query.stateCode, query.state_code);
  if (!sessionId) {
    return res.status(400).json({ success: false, error: COMMON_MESSAGES.MISSING_SESSION_ID });
  }
  if (!stateCode) {
    return res.status(400).json({ success: false, error: COMMON_MESSAGES.MISSING_STATE_CODE });
  }
  return next();
}

function validateCourts(req, res, next) {
  const body = req.body || {};
  const query = req.query || {};
  const sessionId = firstDefined(body.sessionId, query.sessionId);
  const stateCode = firstDefined(body.stateCode, body.state_code, query.stateCode, query.state_code);
  const distCode = firstDefined(body.distCode, body.dist_code, query.distCode, query.dist_code);
  if (!sessionId) {
    return res.status(400).json({ success: false, error: COMMON_MESSAGES.MISSING_SESSION_ID });
  }
  if (!stateCode || !distCode) {
    return res.status(400).json({ success: false, error: COMMON_MESSAGES.MISSING_DISTRICT_FIELDS });
  }
  return next();
}

function validateEstablishments(req, res, next) {
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

  if (!sessionId) {
    return res.status(400).json({ success: false, error: COMMON_MESSAGES.MISSING_SESSION_ID });
  }
  if (!stateCode || !distCode || !courtComplexCode) {
    return res
      .status(400)
      .json({ success: false, error: COMMON_MESSAGES.MISSING_ESTABLISHMENT_FIELDS });
  }
  return next();
}

module.exports = {
  validateInit,
  validateSetFields,
  validateSessionIdQuery,
  validateDistricts,
  validateCourts,
  validateEstablishments,
};
