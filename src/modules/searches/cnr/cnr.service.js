"use strict";

const { postWithRetry, fetchCaptchaPayload } = require("../../portal/portal.service");
const { parseCaseDetail } = require("../common/parsers");

function findHtmlCandidate(payload) {
  if (!payload || typeof payload !== "object") return "";

  const preferredKeys = [
    "data_list",
    "casetype_list",
    "case_history",
    "case_details",
    "cnr_data",
    "party_data",
    "html",
    "result",
  ];

  for (const key of preferredKeys) {
    const value = payload[key];
    if (
      typeof value === "string" &&
      /<(table|div|h1|h2|h3|span|tr|td)\b/i.test(value)
    ) {
      return value;
    }
  }

  for (const value of Object.values(payload)) {
    if (
      typeof value === "string" &&
      (
        /<(table|div|h1|h2|h3|span|tr|td)\b/i.test(value) ||
        /case details|case status|cnr number|petitioner and advocate/i.test(value)
      )
    ) {
      return value;
    }
  }

  return "";
}

function normalizeCnrSearchResponse(payload) {
  if (typeof payload === "string") {
    return {
      html: payload,
      raw: payload,
      upstreamStatus: null,
      divCaptcha: "",
    };
  }

  if (!payload || typeof payload !== "object") {
    return {
      html: "",
      raw: payload,
      upstreamStatus: null,
      divCaptcha: "",
    };
  }

  return {
    html: findHtmlCandidate(payload),
    raw: payload,
    upstreamStatus:
      payload.status !== undefined && payload.status !== null
        ? Number(payload.status)
        : null,
    divCaptcha: payload.div_captcha || "",
  };
}

async function fetchCnrSearch(session, { cino, captchaCode }) {
  const data = await postWithRetry(session, "cnr_status/searchByCNR/", {
    cino,
    fcaptcha_code: captchaCode,
  });

  const normalized = normalizeCnrSearchResponse(data);
  return {
    ...normalized,
    parsed: parseCaseDetail(normalized.html || ""),
  };
}

module.exports = {
  fetchCaptchaPayload,
  fetchCnrSearch,
  normalizeCnrSearchResponse,
};
