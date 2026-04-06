"use strict";

const MESSAGES = {
  ADVOCATE_SEARCH_FETCHED: "Valid advocate-name search result parsed from raw.adv_data",
  MISSING_ADVOCATE_DATA_FIELDS:
    "Missing required fields: sessionId, advocateName/advocate_name, captchaCode/adv_captcha_code",
  COURT_DETAILS_NOT_SET:
    "Court context not set. Call /api/common/establishments first, or pass stateCode/distCode/courtComplexCode in the request.",
  EMPTY_SEARCH_RESPONSE:
    "Empty response from eCourts. Captcha may be wrong or session expired.",
  EMPTY_ADVOCATE_DATA_RESPONSE:
    "Search completed but no parsable adv_data HTML was returned.",
};

module.exports = {
  MESSAGES,
};
