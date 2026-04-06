"use strict";

const MESSAGES = {
  CNR_CASE_FETCHED: "CNR case fetched successfully",
  MISSING_SESSION_ID: "Missing sessionId",
  MISSING_CNR_FIELDS: "Missing required fields: sessionId, cino, captchaCode/fcaptcha_code",
  EMPTY_CNR_RESPONSE:
    "Search completed but no parsable CNR case HTML was returned.",
};

module.exports = {
  MESSAGES,
};
