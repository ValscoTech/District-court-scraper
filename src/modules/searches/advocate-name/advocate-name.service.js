"use strict";

const { fetchCaptchaPayload, postWithRetry } = require("../../portal/portal.service");
const {
  fetchDisplayPdf,
  fetchIABusiness,
  fetchViewBusiness,
  fetchViewHistory,
} = require("../party-name/party-name.service");
const { normalizePartySearchResponse, parseViewHistoryOnClick } = require("../party-name/parsers");

function normalizeAdvocateNameSearchResponse(payload) {
  const normalized = normalizePartySearchResponse(payload);
  if (normalized.html) {
    return normalized;
  }

  if (!payload || typeof payload !== "object") {
    return normalized;
  }

  return {
    html: payload.adv_data || payload.data_list || "",
    raw: payload,
    upstreamStatus:
      payload.status !== undefined && payload.status !== null
        ? Number(payload.status)
        : null,
    divCaptcha: payload.div_captcha || "",
  };
}

function buildAdvocateNameSearchSuccessResponse({
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
    message: "Valid advocate-name search result parsed from raw.adv_data",
    result: {
      metadata: {
        totalEstablishments: metadata.totalEstablishments || 0,
        totalCases: metadata.totalCases || 0,
        courtName: metadata.courtName || "",
        searchBy: "advocateName",
        searchType: "CSAdvName",
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

function parseAdvocateNameResults(html) {
  const cheerio = require("cheerio");
  const $ = cheerio.load(html);
  const cases = [];
  const courtBreakdown = [];
  let totalEstablishments = 0;
  let totalCases = 0;
  let courtName = "";

  $(".courtsDiv, .col.border-top").each((_, el) => {
    const text = $(el).text();
    const estMatch = text.match(/Establishments[^:]*:\s*(\d+)/i);
    const casesMatch = text.match(/cases\s*:\s*(\d+)/i);
    if (estMatch) totalEstablishments = parseInt(estMatch[1], 10);
    if (casesMatch) totalCases = parseInt(casesMatch[1], 10);
  });

  const courtAnchor = $("a.noToken").first();
  if (courtAnchor.length) courtName = courtAnchor.text().replace(/\s+/g, " ").trim();

  $("a.noToken").each((_, el) => {
    const text = $(el).text().replace(/\s+/g, " ").trim();
    const match = text.match(/^(.*?):\s*(\d+)$/);
    if (!match) return;
    courtBreakdown.push({
      courtName: match[1].trim(),
      caseCount: Number(match[2]),
    });
  });

  $("#dispTable tbody tr, table#dispTable tbody tr").each((_, tr) => {
    const tds = $(tr).find("td");
    if (tds.length < 4) return;

    const srNo = $(tds[0]).text().trim();
    if (!srNo || Number.isNaN(Number(srNo))) return;

    const caseTypeNumberYear = $(tds[1]).text().replace(/\s+/g, " ").trim();
    const petitionerRespondent = $(tds[2]).text().replace(/\s+/g, " ").trim();
    const advocateName = $(tds[3]).text().replace(/\s+/g, " ").trim();
    const viewCell = tds.length >= 5 ? $(tds[4]) : $(tds[3]);
    const viewLink = viewCell.find("a").first();

    cases.push({
      serialNumber: srNo,
      caseTypeNumberYear,
      petitionerRespondent,
      advocateName,
      viewDetails: parseViewHistoryOnClick(viewLink.attr("onclick") || ""),
    });
  });

  return {
    cases,
    metadata: { totalEstablishments, totalCases, courtName },
    courtBreakdown,
  };
}

module.exports = {
  fetchCaptchaPayload,
  postWithRetry,
  fetchViewHistory,
  fetchIABusiness,
  fetchViewBusiness,
  fetchDisplayPdf,
  normalizeAdvocateNameSearchResponse,
  parseAdvocateNameResults,
  buildAdvocateNameSearchSuccessResponse,
};
