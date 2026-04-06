"use strict";

const { firstDefined } = require("../../../shared/utils/common.util");
const { MESSAGES } = require("./advocate-name.constants");

function validateCaseData(req, res, next) {
  const advocateName = firstDefined(req.body.advocateName, req.body.advocate_name);
  const captchaCode = firstDefined(
    req.body.captchaCode,
    req.body.adv_captcha_code,
  );

  if (!req.body.sessionId || !advocateName || !captchaCode) {
    return res.status(400).json({
      success: false,
      status: 0,
      error: MESSAGES.MISSING_ADVOCATE_DATA_FIELDS,
    });
  }

  return next();
}

module.exports = {
  validateCaseData,
};
