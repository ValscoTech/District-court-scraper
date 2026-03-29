"use strict";

class PortalError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.name = "PortalError";
    this.statusCode = statusCode;
  }
}

module.exports = {
  PortalError,
};
