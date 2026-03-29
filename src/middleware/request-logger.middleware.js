"use strict";

function requestLogger(req, _res, next) {
  const start = Date.now();
  req._requestStartAt = start;
  next();
}

module.exports = {
  requestLogger,
};
