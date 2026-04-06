"use strict";

const express = require("express");

const controller = require("./case-number.controller");
const validators = require("./case-number.validators");
const { CASE_NUMBER_ROUTE_PATHS } = require("./case-number.route-paths");

const router = express.Router();

router.all(
  CASE_NUMBER_ROUTE_PATHS.CASE_TYPES,
  validators.validateCaseTypes,
  controller.caseTypes,
);
router.post(
  CASE_NUMBER_ROUTE_PATHS.CASE_DATA,
  validators.validateCaseData,
  controller.caseData,
);

module.exports = router;
