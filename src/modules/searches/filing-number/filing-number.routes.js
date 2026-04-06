"use strict";

const express = require("express");

const controller = require("./filing-number.controller");
const validators = require("./filing-number.validators");
const { FILING_NUMBER_ROUTE_PATHS } = require("./filing-number.route-paths");

const router = express.Router();

router.all(
  FILING_NUMBER_ROUTE_PATHS.CASE_TYPES,
  validators.validateCaseTypes,
  controller.caseTypes,
);
router.post(
  FILING_NUMBER_ROUTE_PATHS.CASE_DATA,
  validators.validateCaseData,
  controller.caseData,
);

module.exports = router;
