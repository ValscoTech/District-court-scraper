"use strict";

const { firstDefined } = require("../common/utils/common");
const { MESSAGES } = require("./cnr.constants");

function validateCnrSearch(req, res, next) {
  const cino = firstDefined(req.body.cino, req.body.cnrNumber, req.body.cnr_number);
  const captchaCode = firstDefined(req.body.captchaCode, req.body.fcaptcha_code);

  if (!req.body.sessionId || !cino || !captchaCode) {
    return res.status(400).json({
      success: false,
      status: 0,
      error: MESSAGES.MISSING_CNR_FIELDS,
    });
  }

  return next();
}

module.exports = {
  validateCnrSearch,
};
