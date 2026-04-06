"use strict";

const { fetchCaptchaPayload, postWithRetry } = require("../../portal/portal.service");
const {
  parseOptionPayload,
  serializeRawPayload,
} = require("../../../shared/parsers/option-list.parser");
const {
  buildCaptchaFragment,
  fetchDisplayPdf,
  fetchIABusiness,
  fetchViewBusiness,
  fetchViewHistory,
} = require("../party-name/party-name.service");
const { normalizePartySearchResponse, parsePartyNameResults } = require("../party-name/parsers");

function normalizeCaseNumberSearchResponse(payload) {
  const normalized = normalizePartySearchResponse(payload);
  if (normalized.html) {
    return normalized;
  }

  if (!payload || typeof payload !== "object") {
    return normalized;
  }

  return {
    html: payload.case_data || payload.data_list || "",
    raw: payload,
    upstreamStatus:
      payload.status !== undefined && payload.status !== null
        ? Number(payload.status)
        : null,
    divCaptcha: payload.div_captcha || "",
  };
}

function buildCaseNumberSearchSuccessResponse({
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
    message: "Valid case-number search result parsed from raw.case_data",
    result: {
      metadata: {
        totalEstablishments: metadata.totalEstablishments || 0,
        totalCases: metadata.totalCases || 0,
        courtName: metadata.courtName || "",
        searchBy: "caseNumber",
        searchType: "CScaseNumber",
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

async function fetchCaseTypes(session, {
  stateCode,
  distCode,
  courtComplexCode,
  estCode = "",
  searchType = "c_no",
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

module.exports = {
  fetchCaptchaPayload,
  postWithRetry,
  fetchCaseTypes,
  buildCaptchaFragment,
  fetchViewHistory,
  fetchIABusiness,
  fetchViewBusiness,
  fetchDisplayPdf,
  normalizeCaseNumberSearchResponse,
  parsePartyNameResults,
  buildCaseNumberSearchSuccessResponse,
};
