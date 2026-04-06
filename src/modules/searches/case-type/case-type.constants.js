"use strict";

const MESSAGES = {
  CASE_SEARCH_FETCHED: "Valid case-type search result parsed from raw.case_data",
  CASE_TYPES_FETCHED: "Case types fetched successfully",
  MISSING_CASE_DATA_FIELDS:
    "Missing required fields: sessionId, caseType/case_type/case_type_1, searchYear/search_year, caseStatus/case_status, captchaCode/ct_captcha_code",
  MISSING_CASE_TYPE_FIELDS:
    "Missing required fields: sessionId, stateCode/state_code, distCode/dist_code, courtComplexCode/court_complex_code",
  COURT_DETAILS_NOT_SET:
    "Court context not set. Call /api/common/establishments first, or pass stateCode/distCode/courtComplexCode in the request.",
  EMPTY_SEARCH_RESPONSE:
    "Empty response from eCourts. Captcha may be wrong or session expired.",
  EMPTY_CASE_DATA_RESPONSE:
    "Search completed but no parsable case_data HTML was returned.",
};

module.exports = {
  MESSAGES,
};
