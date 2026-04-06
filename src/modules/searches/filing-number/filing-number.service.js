"use strict";

const {
  parseOptionPayload,
  serializeRawPayload,
} = require("../../../shared/parsers/option-list.parser");
const { fetchCaptchaPayload, postWithRetry } = require("../../portal/portal.service");
const {
  buildCaptchaFragment,
  fetchDisplayPdf,
  fetchIABusiness,
  fetchViewBusiness,
  fetchViewHistory,
} = require("../party-name/party-name.service");
const { normalizePartySearchResponse, parsePartyNameResults } = require("../party-name/parsers");

function normalizeFilingNumberSearchResponse(payload) {
  const normalized = normalizePartySearchResponse(payload);
  if (normalized.html) {
    return normalized;
  }

  if (!payload || typeof payload !== "object") {
    return normalized;
  }

  return {
    html: payload.filing_data || payload.data_list || "",
    raw: payload,
    upstreamStatus:
      payload.status !== undefined && payload.status !== null
        ? Number(payload.status)
        : null,
    divCaptcha: payload.div_captcha || "",
  };
}

async function fetchCaseTypes(session, {
  stateCode,
  distCode,
  courtComplexCode,
  estCode = "",
  searchType = "fil_no",
}) {
  const payload = await postWithRetry(session, "casestatus/fillCaseType", {
    state_code: stateCode,
    dist_code: distCode,
    court_complex_code: courtComplexCode,
    est_code: estCode,
    search_type: searchType,
  });

  return {
    options: parseOptionPayload(payload),
    rawHtml: serializeRawPayload(payload),
    raw: payload,
  };
}

function buildFilingNumberSearchSuccessResponse({
  normalizedSearch,
  layer1Html,
  cases,
  metadata,
  courtBreakdown,
  resolvedState,
  resolvedDist,
  resolvedComplex,
}) {
  return {
    status: normalizedSearch.upstreamStatus ?? 1,
    message: "Valid filing-number search result parsed from raw.filing_data",
    result: {
      metadata: {
        totalEstablishments: metadata.totalEstablishments || 0,
        totalCases: metadata.totalCases || 0,
        courtName: metadata.courtName || "",
        searchBy: "filingNumber",
        searchType: "CSfilingNumber",
        stateCode: String(resolvedState || ""),
        distCode: String(resolvedDist || ""),
        complexCode: String(resolvedComplex || ""),
      },
      courtBreakdown,
      parsedCases: cases,
    },
    rawHtml: layer1Html,
  };
}

module.exports = {
  fetchCaptchaPayload,
  postWithRetry,
  fetchCaseTypes,
  buildCaptchaFragment,
  fetchViewHistory,
  fetchIABusiness,
  fetchViewBusiness,
  fetchDisplayPdf,
  normalizeFilingNumberSearchResponse,
  parsePartyNameResults,
  buildFilingNumberSearchSuccessResponse,
};
