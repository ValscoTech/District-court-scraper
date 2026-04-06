"use strict";

const express = require("express");

const controller = require("./portal.controller");
const validators = require("./portal.validators");
const partyNameController = require("../searches/party-name/party-name.controller");
const partyNameValidators = require("../searches/party-name/party-name.validators");
const { COMMON_ROUTE_PATHS } = require("./portal.route-paths");

const router = express.Router();

router.post(COMMON_ROUTE_PATHS.INIT, validators.validateInit, controller.init);
router.post(
  COMMON_ROUTE_PATHS.SET_FIELDS,
  validators.validateSetFields,
  controller.setFields,
);
router.get(
  COMMON_ROUTE_PATHS.CAPTCHA,
  validators.validateSessionIdQuery,
  controller.captcha,
);
router.get(COMMON_ROUTE_PATHS.CAPTCHA_DEBUG, controller.captchaDebug);
router.get(
  COMMON_ROUTE_PATHS.CAPTCHA_IMAGE,
  validators.validateSessionIdQuery,
  controller.captchaImage,
);
router.all(
  COMMON_ROUTE_PATHS.DISTRICTS,
  validators.validateDistricts,
  controller.districts,
);
router.all(
  COMMON_ROUTE_PATHS.COURTS,
  validators.validateCourts,
  controller.courts,
);
router.all(
  COMMON_ROUTE_PATHS.ESTABLISHMENTS,
  validators.validateEstablishments,
  controller.establishments,
);
router.post(
  COMMON_ROUTE_PATHS.CASE_DETAIL,
  partyNameValidators.validateCaseDetail,
  partyNameController.caseDetail,
);
router.post(
  COMMON_ROUTE_PATHS.IA_BUSINESS,
  partyNameValidators.validateIaBusiness,
  partyNameController.iaBusiness,
);
router.post(
  COMMON_ROUTE_PATHS.BUSINESS_DETAIL,
  partyNameValidators.validateBusinessDetailPost,
  partyNameController.businessDetailPost,
);
router.post(
  COMMON_ROUTE_PATHS.ORDER_PDF,
  partyNameValidators.validateOrderPdfPost,
  partyNameController.orderPdfPost,
);
router.get(
  COMMON_ROUTE_PATHS.ORDER_PDF,
  partyNameValidators.validateOrderPdfGet,
  partyNameController.orderPdfGet,
);

module.exports = router;
