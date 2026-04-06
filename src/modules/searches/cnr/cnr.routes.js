"use strict";

const express = require("express");

const controller = require("./cnr.controller");
const validators = require("./cnr.validators");
const { CNR_ROUTE_PATHS } = require("./cnr.route-paths");

const router = express.Router();

router.post(
  CNR_ROUTE_PATHS.SEARCH,
  validators.validateCnrSearch,
  controller.search,
);

module.exports = router;
