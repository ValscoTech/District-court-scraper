"use strict";

const MESSAGES = {
  FILING_SEARCH_FETCHED: "Valid filing-number search result parsed from raw.filing_data",
  CASE_TYPES_FETCHED: "Case types fetched successfully",
  MISSING_FILING_DATA_FIELDS:
    "Missing required fields: sessionId, filingNo/filing_no, filyear, captchaCode/file_captcha_code",
  MISSING_CASE_TYPE_FIELDS:
    "Missing required fields: sessionId, stateCode/state_code, distCode/dist_code, courtComplexCode/court_complex_code",
  MISSING_CASE_TYPE_FOR_STATE:
    "caseType/case_type is required for this state in filing-number search.",
  COURT_DETAILS_NOT_SET:
    "Court context not set. Call /api/common/establishments first, or pass stateCode/distCode/courtComplexCode in the request.",
  EMPTY_SEARCH_RESPONSE:
    "Empty response from eCourts. Captcha may be wrong or session expired.",
  EMPTY_FILING_DATA_RESPONSE:
    "Search completed but no parsable filing_data HTML was returned.",
};

module.exports = {
  MESSAGES,
};
