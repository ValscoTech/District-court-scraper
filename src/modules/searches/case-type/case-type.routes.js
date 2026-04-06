"use strict";

const express = require("express");

const controller = require("./case-type.controller");
const validators = require("./case-type.validators");
const { CASE_TYPE_ROUTE_PATHS } = require("./case-type.route-paths");

const router = express.Router();

router.all(
  CASE_TYPE_ROUTE_PATHS.CASE_TYPES,
  validators.validateCaseTypes,
  controller.caseTypes,
);
router.post(
  CASE_TYPE_ROUTE_PATHS.CASE_DATA,
  validators.validateCaseData,
  controller.caseData,
);

module.exports = router;
