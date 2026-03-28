/**
 * partyname.js — Jurident eCourts Party Name Search Module
 *
 * This module exports all the business logic for the party name search flow:
 *   - Session creation & management
 *   - All layer fetch functions (layer1 → layer3.3)
 *   - All HTML parsers
 *
 * Import this in server.js or use standalone for scripting / testing.
 *
 * Usage example:
 *   const pn = require('./partyname');
 *   const session = pn.createSession();
 *   await pn.initSession(session);
 *   await pn.setCourtDetails(session, { complexCode:'1260008@5,6,7@N', stateCode:'26', distCode:'8' });
 *   const captchaB64 = await pn.fetchCaptcha(session);
 *   // ... show captchaB64 to user, collect their input ...
 *   const result = await pn.searchByPartyName(session, {
 *     petresName: 'rahul', rgyearP: '2024', caseStatus: 'Pending', captchaCode: 'xxxxx'
 *   });
 */

"use strict";

const axios = require("axios");
const { wrapper } = require("axios-cookiejar-support");
const { CookieJar } = require("tough-cookie");
const cheerio = require("cheerio");

// ─── Constants ───────────────────────────────────────────────────────────────

const BASE_URL = "https://services.ecourts.gov.in/ecourtindia_v6/";

const DEFAULT_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
    "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  Accept: "application/json, text/html, */*",
  "Accept-Language": "en-US,en;q=0.9",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  "X-Requested-With": "XMLHttpRequest",
  Origin: "https://services.ecourts.gov.in",
  Referer: "https://services.ecourts.gov.in/ecourtindia_v6/?p=casestatus/index",
};

// ─── Session ─────────────────────────────────────────────────────────────────

/**
 * Create a fresh session with its own CookieJar.
 * Each session is completely isolated — no shared state.
 */
function createSession() {
  const jar = new CookieJar();
  const client = wrapper(
    axios.create({
      jar,
      withCredentials: true,
      baseURL: BASE_URL,
      timeout: 30000,
      headers: DEFAULT_HEADERS,
    })
  );
  return {
    jar,
    client,
    appToken: "",
    complexCode: "",
    stateCode: "",
    distCode: "",
    estCode: "null",
  };
}

/**
 * Hit the index page to seed cookies (JSESSIONID etc.).
 * Must be called once before any other request in a session.
 */
async function initSession(session) {
  const resp = await session.client.get("", {
    params: { p: "casestatus/index", app_token: "" },
    headers: { Accept: "text/html,application/xhtml+xml" },
  });
  // Some deployments embed the app_token in the page HTML
  if (typeof resp.data === "string") {
    const match = resp.data.match(/app_token['":\s]+([a-zA-Z0-9+/=_-]{20,})/);
    if (match) session.appToken = match[1];
  }
  return session;
}

// ─── Core HTTP Helper ────────────────────────────────────────────────────────

/**
 * Build URL-encoded body. Always appends ajax_req=true and app_token.
 */
function buildForm(fields, appToken = "") {
  const p = new URLSearchParams();
  for (const [k, v] of Object.entries(fields)) {
    p.append(k, v == null ? "" : String(v));
  }
  p.append("ajax_req", "true");
  p.append("app_token", appToken);
  return p.toString();
}

/**
 * POST with exponential-backoff retry.
 * On session expiry the CookieJar still contains the same jar so the next
 * attempt benefits from any cookies that were refreshed by the calling code.
 *
 * @param {object} session
 * @param {string} path       - eCourts path param, e.g. "casestatus/submitPartyName"
 * @param {object} fields     - form fields (excluding ajax_req / app_token)
 * @param {number} retries    - max attempts (default 3)
 * @returns {*} parsed JSON or raw string
 */
async function postWithRetry(session, path, fields, retries = 3) {
  let lastErr;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const body = buildForm(fields, session.appToken);
      const resp = await session.client.post("", body, {
        params: { p: path },
      });

      const data = resp.data;

      // Detect session-expired HTML (string containing "session" and "expired")
      if (
        typeof data === "string" &&
        /session.*expired|expired.*session/i.test(data)
      ) {
        throw new Error("eCourts session expired");
      }

      // Detect CAPTCHA failure message
      if (
        typeof data === "string" &&
        /invalid.*captcha|captcha.*invalid|wrong.*captcha/i.test(data)
      ) {
        throw new Error("Invalid CAPTCHA");
      }

      return data;
    } catch (err) {
      lastErr = err;
      console.warn(`[partyname] attempt ${attempt}/${retries} → ${path}: ${err.message}`);

      if (attempt < retries) {
        // Don't retry on CAPTCHA failures — caller must re-fetch captcha
        if (err.message === "Invalid CAPTCHA") throw err;
        await sleep(600 * attempt);
      }
    }
  }
  throw lastErr;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ─── Layer 0: Set Court Complex ───────────────────────────────────────────────

/**
 * POST casestatus/set_data — locks in the court complex for the session.
 *
 * @param {object} session
 * @param {object} opts
 *   complexCode     e.g. "1260008@5,6,7@N"  (full value from fillcompl response)
 *   stateCode       e.g. "26"
 *   distCode        e.g. "8"
 *   estCode         e.g. "null" (default "null")
 */
async function setCourtDetails(session, { complexCode, stateCode, distCode, estCode = "null" }) {
  const data = await postWithRetry(session, "casestatus/set_data", {
    complex_code: complexCode,
    selected_state_code: stateCode,
    selected_dist_code: distCode,
    selected_est_code: estCode,
  });

  // Persist resolved codes into session
  if (typeof data === "object" && data.complex_code) {
    session.complexCode = data.complex_code;
    session.estCode = data.est_code || estCode;
  } else {
    // Fallback: strip the "@..." suffix from complexCode
    session.complexCode = complexCode.split("@")[0];
    session.estCode = estCode;
  }
  session.stateCode = stateCode;
  session.distCode = distCode;

  return data;
}

// ─── Layer 0b: Fetch Captcha ──────────────────────────────────────────────────

/**
 * Fetch the captcha image. Returns base64-encoded image string.
 * Bust the cache with a timestamp to always get a fresh one.
 */
async function fetchCaptcha(session) {
  // Step 1: POST getCaptcha to initialize captcha in the server-side PHP session
  const getCaptchaBody = buildForm({}, session.appToken || "");
  await session.client.post("", getCaptchaBody, {
    params: { p: "casestatus/getCaptcha" },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json, text/javascript, */*; q=0.01",
      Referer: "https://services.ecourts.gov.in/ecourtindia_v6/?p=casestatus/index",
      Origin: "https://services.ecourts.gov.in",
    },
  });

  // Step 2: GET the captcha image from vendor/securimage (NOT securimage/)
  const resp = await session.client.get(
    "vendor/securimage/securimage_show.php",
    {
      params: { t: Date.now() },
      responseType: "arraybuffer",
      headers: {
        Accept: "image/webp,image/apng,image/*,*/*;q=0.8",
        Referer: "https://services.ecourts.gov.in/ecourtindia_v6/?p=casestatus/index",
      },
    }
  );
  const contentType = resp.headers["content-type"] || "image/png";
  const base64 = Buffer.from(resp.data).toString("base64");
  return { base64Image: `data:${contentType};base64,${base64}`, contentType };
}

// ─── Layer 1: submitPartyName ─────────────────────────────────────────────────

/**
 * POST casestatus/submitPartyName.
 * Returns { cases, metadata, rawHtml }.
 *
 * @param {object} session
 * @param {object} opts
 *   petresName      party name to search
 *   rgyearP         registration year (e.g. "2024")
 *   caseStatus      "Pending" | "Disposed" | "Both"
 *   captchaCode     user-entered captcha text
 *   stateCode?      override session value
 *   distCode?       override session value
 *   courtComplexCode? override session value
 *   estCode?        override session value
 */
async function searchByPartyName(session, opts) {
  const {
    petresName,
    rgyearP = "",
    caseStatus = "Pending",
    captchaCode,
    stateCode,
    distCode,
    courtComplexCode,
    estCode,
  } = opts;

  const sc = stateCode || session.stateCode;
  const dc = distCode || session.distCode;
  const cc = courtComplexCode || session.complexCode;
  const ec = estCode || session.estCode || "null";

  if (!sc || !dc || !cc) {
    throw new Error("Court details not set. Call setCourtDetails() first.");
  }
  if (!petresName || !captchaCode) {
    throw new Error("petresName and captchaCode are required.");
  }

  const data = await postWithRetry(session, "casestatus/submitPartyName", {
    petres_name: petresName,
    rgyearP,
    case_status: caseStatus,
    fcaptcha_code: captchaCode,
    state_code: sc,
    dist_code: dc,
    court_complex_code: cc,
    est_code: ec,
  });

  const html = typeof data === "string" ? data : (data.data_list || "");

  if (!html || html.trim() === "") {
    throw new Error("Empty response — captcha may be incorrect or session expired.");
  }

  const { cases, metadata } = parsePartyNameResults(html);
  return { cases, metadata, rawHtml: html };
}

// ─── Layer 2: viewHistory (full case detail) ──────────────────────────────────

/**
 * POST home/viewHistory.
 * Returns parsed case detail object.
 */
async function fetchCaseDetail(session, params) {
  const {
    caseNo, cino, courtCode,
    hideparty = "",
    searchFlag = "CScaseNumber",
    stateCode, distCode, complexCode,
    searchBy = "CSpartyName",
  } = params;

  const sc = stateCode || session.stateCode;
  const dc = distCode || session.distCode;
  const cc = complexCode || session.complexCode;

  const data = await postWithRetry(session, "home/viewHistory", {
    court_code: courtCode,
    state_code: sc,
    dist_code: dc,
    court_complex_code: cc,
    case_no: caseNo,
    cino,
    hideparty,
    search_flag: searchFlag,
    search_by: searchBy,
  });

  const html = typeof data === "string" ? data : (data.data_list || "");
  return { detail: parseCaseDetail(html), rawHtml: html };
}

// ─── Layer 3.1: viewIABusiness ────────────────────────────────────────────────

/**
 * POST home/viewIABusiness.
 * ia_no, cinoia, ia_case_type_name, ia_filno, ia_filyear, national_court_code, search_by
 */
async function fetchIABusiness(session, iaParams) {
  const {
    ia_no, cinoia,
    ia_case_type_name = "IA",
    ia_filno, ia_filyear,
    national_court_code,
    search_by = "CSpartyName",
  } = iaParams;

  const data = await postWithRetry(session, "home/viewIABusiness", {
    state_code: session.stateCode,
    dist_code: session.distCode,
    court_complex_code: session.complexCode,
    ia_no,
    cinoia,
    ia_case_type_name,
    ia_filno,
    ia_filyear,
    national_court_code,
    search_by,
  });

  const html = typeof data === "object" ? data.data_list : data;
  return parseIABusinessHtml(html || "");
}

// ─── Layer 3.2: viewBusiness ──────────────────────────────────────────────────

/**
 * POST home/viewBusiness.
 */
async function fetchViewBusiness(session, bParams) {
  const {
    nextdate1, case_number1,
    state_code,
    disposal_flag = "Pending",
    businessDate,
    national_court_code,
    court_no,
    search_by = "CSpartyName",
    srno,
  } = bParams;

  const data = await postWithRetry(session, "home/viewBusiness", {
    court_code: bParams.court_code || "",
    state_code: state_code || session.stateCode,
    dist_code: session.distCode,
    court_complex_code: session.complexCode,
    nextdate1,
    case_number1,
    disposal_flag,
    businessDate,
    national_court_code,
    court_no,
    search_by,
    srno,
  });

  const html = typeof data === "object" ? data.data_list : data;
  return parseViewBusinessHtml(html || "");
}

// ─── Layer 3.3: display_pdf ───────────────────────────────────────────────────

/**
 * POST home/display_pdf.
 * Returns { pdf_url, raw_path }.
 */
async function fetchOrderPdf(session, pdfParams) {
  const {
    normal_v, case_val, court_code, filename, appFlag = "",
  } = pdfParams;

  const data = await postWithRetry(session, "home/display_pdf", {
    normal_v,
    case_val,
    court_code,
    filename,
    appFlag,
  });

  const rawPath = typeof data === "object" ? data.order : null;
  return {
    pdf_url: rawPath ? `${BASE_URL}${rawPath}` : null,
    raw_path: rawPath || null,
  };
}

// ─── HTML Parsers ─────────────────────────────────────────────────────────────

function normalizeKey(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

/**
 * Parse layer-1 party name results HTML.
 * Returns { cases, metadata }.
 */
function parsePartyNameResults(html) {
  const $ = cheerio.load(html);
  const cases = [];
  let totalEstablishments = 0;
  let totalCases = 0;
  let courtName = "";

  // Metadata
  const metaText = $(".courtsDiv, .col.border-top").text();
  const estM = metaText.match(/Establishments[^:]*:\s*(\d+)/i);
  const casM = metaText.match(/cases\s*:\s*(\d+)/i);
  if (estM) totalEstablishments = parseInt(estM[1], 10);
  if (casM) totalCases = parseInt(casM[1], 10);

  const courtAnchor = $("a.noToken").first();
  if (courtAnchor.length) courtName = courtAnchor.text().trim();

  // Rows
  $("#dispTable tbody tr, table tbody tr").each((_, tr) => {
    const tds = $(tr).find("td");
    if (tds.length < 3) return;

    const srNo = $(tds[0]).text().trim();
    if (!srNo || isNaN(Number(srNo))) return;

    const caseTypeNumberYear = $(tds[1]).text().trim();
    const petitionerRespondent = $(tds[2])
      .text()
      .replace(/\s+/g, " ")
      .trim();

    const viewLink = $(tds[3]).find("a");
    const rawOnClick = viewLink.attr("onclick") || "";
    const viewDetails = parseViewHistoryOnClick(rawOnClick);
    viewDetails.href = viewLink.attr("href") || "#";

    cases.push({ serialNumber: srNo, caseTypeNumberYear, petitionerRespondent, viewDetails });
  });

  return { cases, metadata: { totalEstablishments, totalCases, courtName } };
}

/**
 * Parse viewHistory onclick args:
 * viewHistory(caseNo, cino, courtCode, hideparty, searchFlag, stateCode, distCode, complexCode, searchBy)
 */
function parseViewHistoryOnClick(raw) {
  const m = raw.match(/viewHistory\(([^)]+)\)/);
  if (!m) return { rawOnClick: raw };
  const p = m[1].split(",").map((s) => s.trim().replace(/^'|'$/g, ""));
  return {
    caseNo: p[0] || "",
    cino: p[1] || "",
    courtCode: p[2] || "",
    hideparty: p[3] || "",
    searchFlag: p[4] || "",
    stateCode: p[5] || "",
    distCode: p[6] || "",
    complexCode: p[7] || "",
    searchBy: p[8] || "",
    rawOnClick: raw,
  };
}

/**
 * Parse viewHistory HTML into a structured case detail object.
 * All fields from the screenshots are captured.
 */
function parseCaseDetail(html) {
  const $ = cheerio.load(html);
  const result = {};

  // ── Case Details ──────────────────────────────────────────────────────────
  result.case_type = extractField($, "Case Type");
  result.filing_number = extractField($, "Filing Number");
  result.filing_date = extractField($, "Filing Date");
  result.registration_number = extractField($, "Registration Number");
  result.registration_date = extractField($, "Registration Date");
  result.cnr_number = extractField($, "CNR Number");
  result.efiling_number = extractField($, "e-Filing Number");
  result.efiling_date = extractField($, "e-Filing Date");

  // ── Case Status ───────────────────────────────────────────────────────────
  result.first_hearing_date = extractField($, "First Hearing Date");
  result.next_hearing_date = extractField($, "Next Hearing Date");
  result.case_stage = extractField($, "Case Stage");
  result.court_number_and_judge = extractField($, "Court Number and Judge");

  // ── Petitioner / Respondent & their Advocates ─────────────────────────────
  result.petitioners_and_advocates = extractPartySection($, "Petitioner and Advocate");
  result.respondents_and_advocates = extractPartySection($, "Respondent and Advocate");

  // ── Acts ──────────────────────────────────────────────────────────────────
  result.acts = parseActsTable($);

  // ── IA Status ─────────────────────────────────────────────────────────────
  result.ia_status = parseIaStatusTable($);

  // ── Case History ──────────────────────────────────────────────────────────
  result.history_of_case_hearing = parseCaseHistoryTable($);

  // ── Interim Orders ────────────────────────────────────────────────────────
  result.interim_orders = parseInterimOrdersTable($);

  // ── Connected Cases ───────────────────────────────────────────────────────
  result.connected_cases = parseConnectedCases($);

  return result;
}

/**
 * Generic field extractor: find a <th> or <td> whose text matches `label`
 * and return the text of the adjacent cell.
 */
function extractField($, label) {
  let value = "";
  const lc = label.toLowerCase();

  $("th, td").each((_, el) => {
    if ($(el).text().trim().toLowerCase() === lc) {
      // Try same-row next <td>
      const nextTd = $(el).next("td");
      if (nextTd.length) { value = nextTd.text().trim(); return false; }
      // Try parent row's next <td>
      const rowTds = $(el).closest("tr").find("td");
      if (rowTds.length) { value = rowTds.last().text().trim(); return false; }
    }
  });

  return value;
}

/**
 * Extract a petitioner/respondent section by its heading text.
 * Returns an array of strings (one per party line).
 */
function extractPartySection($, heading) {
  const entries = [];
  const lc = heading.toLowerCase();

  // Find any element whose text contains the heading
  $("h3, h4, td.pra_heading, .fw-bold").each((_, el) => {
    if ($(el).text().trim().toLowerCase().includes(lc)) {
      // Walk subsequent siblings for content rows
      let node = $(el).parent().next("tr, div, p");
      for (let i = 0; i < 100 && node.length; i++) {
        const t = node.text().trim();
        if (!t) { node = node.next(); continue; }
        // Stop when we hit the next section heading
        if (/respondent.*advocate|petitioner.*advocate|acts|ia status|case history|interim orders/i.test(t) && t.length < 60) break;
        entries.push(t);
        node = node.next();
      }
      return false; // stop outer loop after first match
    }
  });

  return entries;
}

function parseActsTable($) {
  const acts = [];
  $("table").each((_, table) => {
    const thText = $(table).find("th").text().toLowerCase();
    if (!thText.includes("act")) return;

    $(table).find("tbody tr").each((_, tr) => {
      const tds = $(tr).find("td");
      if (tds.length >= 2) {
        const underAct = $(tds[0]).text().trim();
        const underSection = $(tds[1]).text().trim();
        if (underAct || underSection) {
          acts.push({ under_act: underAct, under_section: underSection });
        }
      }
    });
  });
  return acts;
}

function parseIaStatusTable($) {
  const rows = [];
  $("table").each((_, table) => {
    const thText = $(table).find("th").text();
    if (!thText.includes("IA") && !thText.toLowerCase().includes("ia number")) return;

    $(table).find("tbody tr").each((_, tr) => {
      const tds = $(tr).find("td");
      if (tds.length < 4) return;

      const iaLink = $(tds[0]).find("a");
      const iaNumber = iaLink.length ? iaLink.text().trim() : $(tds[0]).text().trim();
      if (!iaNumber) return;

      const row = {
        ia_number: iaNumber,
        ia_onclick: iaLink.attr("onclick") || "",
        party_name: $(tds[1]).text().trim(),
        date_of_filing: $(tds[2]).text().trim(),
        next_date_purpose: $(tds[3]).text().trim(),
        ia_status: $(tds[4]) ? $(tds[4]).text().trim() : "",
      };

      if (row.ia_onclick) {
        row.ia_params = parseViewIABusinessOnClick(row.ia_onclick);
      }

      rows.push(row);
    });
  });
  return rows;
}

/**
 * Parse viewIABusiness onclick:
 * viewIABusiness(ia_no, cinoia, ia_case_type_name, ia_filno, ia_filyear, national_court_code, search_by)
 */
function parseViewIABusinessOnClick(raw) {
  const m = raw.match(/viewIABusiness\(([^)]+)\)/);
  if (!m) return {};
  const p = m[1].split(",").map((s) => s.trim().replace(/^'|'$/g, ""));
  return {
    ia_no: p[0] || "",
    cinoia: p[1] || "",
    ia_case_type_name: p[2] || "IA",
    ia_filno: p[3] || "",
    ia_filyear: p[4] || "",
    national_court_code: p[5] || "",
    search_by: p[6] || "CSpartyName",
  };
}

function parseCaseHistoryTable($) {
  const history = [];
  $("table").each((_, table) => {
    const heading = $(table).prev("h3,h4,.pra_heading").text() + $(table).find("th").text();
    if (!heading.toLowerCase().includes("history") &&
      !heading.toLowerCase().includes("business on date")) return;

    // Identify column indices dynamically
    const headers = [];
    $(table).find("tr:first-child th, thead th").each((_, th) => {
      headers.push($(th).text().trim().toLowerCase());
    });

    const judgeIdx = headers.findIndex((h) => h.includes("judge"));
    const bodIdx = headers.findIndex((h) => h.includes("business on date") || h.includes("business"));
    const hearingIdx = headers.findIndex((h) => h.includes("hearing"));
    const purposeIdx = headers.findIndex((h) => h.includes("purpose"));

    $(table).find("tbody tr").each((_, tr) => {
      const tds = $(tr).find("td");
      if (!tds.length) return;

      const len = tds.length;
      // Use dynamic index or fallback positional
      const judgeCell = $(tds[judgeIdx >= 0 ? judgeIdx : 0]);
      const bodCell = $(tds[bodIdx >= 0 ? bodIdx : (len >= 4 ? 1 : 0)]);
      const hearingCell = $(tds[hearingIdx >= 0 ? hearingIdx : (len >= 4 ? 2 : 1)]);
      const purposeCell = $(tds[purposeIdx >= 0 ? purposeIdx : (len >= 4 ? 3 : 2)]);

      const bodLink = bodCell.find("a");
      const businessOnDate = bodLink.length ? bodLink.text().trim() : bodCell.text().trim();
      const bodOnClick = bodLink.attr("onclick") || "";
      const hearingDate = hearingCell.text().trim();
      const purposeOfHearing = purposeCell.text().trim();
      const judge = judgeCell.text().trim();

      if (!businessOnDate && !hearingDate) return;

      const row = {
        judge,
        business_on_date: businessOnDate,
        hearing_date: hearingDate,
        purpose_of_hearing: purposeOfHearing,
        business_on_date_onclick: bodOnClick,
      };

      if (bodOnClick) {
        row.business_params = parseViewBusinessOnClick(bodOnClick);
      }

      history.push(row);
    });
  });
  return history;
}

/**
 * Parse viewBusiness onclick:
 * viewBusiness(nextdate1, case_number1, state_code, disposal_flag, businessDate,
 *              national_court_code, court_no, search_by, srno)
 */
function parseViewBusinessOnClick(raw) {
  const m = raw.match(/viewBusiness\(([^)]+)\)/);
  if (!m) return {};
  const p = m[1].split(",").map((s) => s.trim().replace(/^'|'$/g, ""));
  return {
    nextdate1: p[0] || "",
    case_number1: p[1] || "",
    state_code: p[2] || "",
    disposal_flag: p[3] || "Pending",
    businessDate: p[4] || "",
    national_court_code: p[5] || "",
    court_no: p[6] || "",
    search_by: p[7] || "CSpartyName",
    srno: p[8] || "",
  };
}

function parseInterimOrdersTable($) {
  const orders = [];
  $("table").each((_, table) => {
    const thText = $(table).find("th").text().toLowerCase();
    if (!thText.includes("order") && !thText.includes("order number")) return;

    $(table).find("tbody tr").each((_, tr) => {
      const tds = $(tr).find("td");
      if (tds.length < 2) return;

      const orderNumber = $(tds[0]).text().trim();
      const orderDate = $(tds[1]).text().trim();
      const detailCell = $(tds[2]);
      const orderLink = detailCell ? detailCell.find("a") : null;

      if (!orderNumber && !orderDate) return;

      const row = {
        order_number: orderNumber,
        order_date: orderDate,
        order_details: orderLink && orderLink.length ? orderLink.text().trim() : (detailCell ? detailCell.text().trim() : ""),
        order_onclick: orderLink ? (orderLink.attr("onclick") || "") : "",
        order_href: orderLink ? (orderLink.attr("href") || "") : "",
      };

      if (row.order_onclick) {
        row.pdf_params = parseDisplayPdfOnClick(row.order_onclick);
      }

      orders.push(row);
    });
  });
  return orders;
}

/**
 * Parse displayPDF onclick:
 * displayPDF(normal_v, case_val, court_code, filename, appFlag)
 */
function parseDisplayPdfOnClick(raw) {
  const m = raw.match(/displayPDF\(([^)]+)\)/);
  if (!m) return {};
  const p = m[1].split(",").map((s) => s.trim().replace(/^'|'$/g, ""));
  return {
    normal_v: p[0] || "",
    case_val: p[1] || "",
    court_code: p[2] || "",
    filename: p[3] || "",
    appFlag: p[4] || "",
  };
}

function parseConnectedCases($) {
  const connected = [];
  $("table").each((_, table) => {
    const heading = $(table).prev("h3,h4").text();
    if (!heading.toLowerCase().includes("connected")) return;
    $(table).find("tbody tr").each((_, tr) => {
      const tds = $(tr).find("td");
      if (tds.length >= 2) {
        connected.push({
          case_number: $(tds[0]).text().trim(),
          details: $(tds[1]).text().trim(),
        });
      }
    });
  });
  return connected;
}

/** Parse viewIABusiness response HTML */
function parseIABusinessHtml(html) {
  const $ = cheerio.load(html);
  const rawText = $("table").first().text();
  const caseNoMatch = rawText.match(/Case No[:\-\s]+([A-Z0-9/\s]+)/i);
  const caseNo = caseNoMatch ? caseNoMatch[1].trim() : "";
  const entries = [];

  $("table tbody tr, table tr").each((_, tr) => {
    const tds = $(tr).find("td");
    if (tds.length < 3) return;
    const iaNo = $(tds[0]).text().trim();
    if (!iaNo) return;
    entries.push({
      ia_no: iaNo,
      business_on_date: $(tds[1]).text().trim(),
      hearing_date: $(tds[2]).text().trim(),
      business: tds[3] ? $(tds[3]).text().trim() : "",
    });
  });

  return { case_no: caseNo, entries };
}

/** Parse viewBusiness response HTML */
function parseViewBusinessHtml(html) {
  const $ = cheerio.load(html);
  const result = {};

  // Court info
  result.court_name = $("center > span").not(":has(b)").first().text().trim();

  // Labeled fields in the inner table
  $("table tr").each((_, tr) => {
    const tds = $(tr).find("td");
    if (tds.length === 3) {
      const label = $(tds[0]).text().trim().toLowerCase().replace(/\s+/g, "_");
      const value = $(tds[2]).text().trim();
      if (label) result[label] = value;
    }
  });

  // Normalize expected keys
  result.business = result["business"] || result["business:"] || "";
  result.next_purpose = result["next_purpose"] || result["next_purpose:"] || "";
  result.next_hearing_date = result["next_hearing_date"] || result["next_hearing_date:"] || "";

  // Header info
  $("center span").each((_, el) => {
    const text = $(el).text().trim();
    if (text.includes("CNR Number")) {
      result.cnr_number = text.replace(/.*CNR Number\s*:/i, "").trim();
    }
    if (text.includes("Case Number")) {
      result.case_number = text.replace(/.*Case Number\s*:/i, "").trim();
    }
    if (text.includes("versus")) {
      result.parties = text.trim();
    }
    if (text.includes("Date :") || text.includes("Date:")) {
      result.date = text.replace(/.*Date\s*:/i, "").trim();
    }
  });

  return result;
}

// ─── Full Pipeline ────────────────────────────────────────────────────────────

/**
 * Run the complete party-name search pipeline.
 *
 * @param {object} session     - a session created by createSession() + initSession()
 * @param {object} searchOpts  - passed to searchByPartyName()
 * @param {object} fetchOpts
 *   fetchDetails?     boolean (default true)  — fetch viewHistory per case
 *   fetchIABusiness?  boolean (default true)  — fetch IA business per IA row
 *   fetchBusiness?    boolean (default true)  — fetch viewBusiness per history row
 *   fetchPdf?         boolean (default false) — fetch PDF path per order row
 *
 * @returns { cases, metadata, rawHtml }
 */
async function runFullPipeline(session, searchOpts, fetchOpts = {}) {
  const {
    fetchDetails = true,
    fetchIABusiness: doIA = true,
    fetchBusiness: doBiz = true,
    fetchPdf = false,
  } = fetchOpts;

  const { cases, metadata, rawHtml } = await searchByPartyName(session, searchOpts);

  if (!fetchDetails) return { cases, metadata, rawHtml };

  for (const c of cases) {
    const vd = c.viewDetails;
    if (!vd || !vd.caseNo) continue;

    try {
      const { detail, rawHtml: detailHtml } = await fetchCaseDetail(session, {
        caseNo: vd.caseNo,
        cino: vd.cino,
        courtCode: vd.courtCode,
        hideparty: vd.hideparty,
        searchFlag: vd.searchFlag,
        stateCode: vd.stateCode,
        distCode: vd.distCode,
        complexCode: vd.complexCode,
        searchBy: vd.searchBy,
      });

      c.detail = detail;
      c._detailHtml = detailHtml; // remove if not needed

      // Layer 3.1
      if (doIA && detail.ia_status) {
        for (const ia of detail.ia_status) {
          if (ia.ia_params?.ia_no) {
            try {
              ia.ia_business = await fetchIABusiness(session, ia.ia_params);
            } catch (e) {
              ia.ia_business_error = e.message;
            }
          }
        }
      }

      // Layer 3.2
      if (doBiz && detail.history_of_case_hearing) {
        for (const h of detail.history_of_case_hearing) {
          if (h.business_params?.businessDate) {
            try {
              h.business_detail = await fetchViewBusiness(session, h.business_params);
            } catch (e) {
              h.business_detail_error = e.message;
            }
          }
        }
      }

      // Layer 3.3
      if (fetchPdf && detail.interim_orders) {
        for (const o of detail.interim_orders) {
          if (o.pdf_params?.normal_v) {
            try {
              o.pdf = await fetchOrderPdf(session, o.pdf_params);
            } catch (e) {
              o.pdf_error = e.message;
            }
          }
        }
      }
    } catch (e) {
      c.detail_error = e.message;
    }
  }

  return { cases, metadata, rawHtml };
}

// ─── Exports ─────────────────────────────────────────────────────────────────

module.exports = {
  // Session
  createSession,
  initSession,

  // Court setup
  setCourtDetails,

  // Captcha
  fetchCaptcha,

  // Layer 1
  searchByPartyName,

  // Layer 2
  fetchCaseDetail,

  // Layer 3.x
  fetchIABusiness,
  fetchViewBusiness,
  fetchOrderPdf,

  // Full pipeline
  runFullPipeline,

  // Parsers (exported for testing)
  parsePartyNameResults,
  parseCaseDetail,
  parseIABusinessHtml,
  parseViewBusinessHtml,
  parseViewHistoryOnClick,
  parseViewIABusinessOnClick,
  parseViewBusinessOnClick,
  parseDisplayPdfOnClick,
  parseInterimOrdersTable,
  parseCaseHistoryTable,
  parseIaStatusTable,
  parseActsTable,

  // Utilities
  postWithRetry,
  buildForm,
};