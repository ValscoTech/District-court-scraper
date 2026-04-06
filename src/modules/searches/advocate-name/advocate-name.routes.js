"use strict";

const express = require("express");

const controller = require("./advocate-name.controller");
const validators = require("./advocate-name.validators");
const { ADVOCATE_NAME_ROUTE_PATHS } = require("./advocate-name.route-paths");

const router = express.Router();

router.post(
  ADVOCATE_NAME_ROUTE_PATHS.CASE_DATA,
  validators.validateCaseData,
  controller.caseData,
);

module.exports = router;
