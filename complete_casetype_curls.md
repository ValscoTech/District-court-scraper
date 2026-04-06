# eCourts Scraper API cURLs (Case Type Flow)

This document contains the complete and accurate set of cURLs to navigate the entire API extraction flow from initializing a session to viewing PDF orders for a given case type.

### 1️⃣ INIT SESSION
Initialize a session to receive a `sessionId`.

```bash
curl --location --request POST "http://127.0.0.1:3000/api/common/init"
```

### 2️⃣ SET COURT CONTEXT (VERY IMPORTANT)
Set the specific state, district, and court complex context for the session.

```bash
curl --location "http://127.0.0.1:3000/api/common/set-fields" \
--header "Content-Type: application/json" \
--data '{
  "sessionId": "abc123",
  "complexCode": "1260008",
  "stateCode": "26",
  "distCode": "8",
  "estCode": "null"
}'
```
*Note: Make sure to usecamelCase here. `"estCode": "null"` string will be correctly handled by the backend to fetch all court establishments when left blank.*

### 3️⃣ GET CAPTCHA
Fetch the CAPTCHA required for the case list query.

```bash
curl --location "http://127.0.0.1:3000/api/common/captcha?sessionId=abc123"
```
*Note: Solve the captcha manually and copy the text for use in Step 5 (`ct_captcha_code`).*

### 4️⃣ GET CASE TYPES
Fetch the available Case Types for the specified court complex. (e.g., getting `29^7`)

```bash
curl --location "http://127.0.0.1:3000/api/casetype/case-types" \
--header "Content-Type: application/json" \
--data '{
    "sessionId": "abc123",
    "stateCode": "26",
    "distCode": "8",
    "courtComplexCode": "1260008",
    "estCode": "null",
    "searchType": "c_type"
}'
```
*Note: This can be a `GET` request with query params or a `POST` request with JSON body (like above).*

### 5️⃣ FETCH CASE LIST
**Method:** POST

Fetch the basic list of cases referencing the solved captcha and `case_type_1`.

```bash
curl --location --request POST "http://127.0.0.1:3000/api/casetype/case-data" \
--header "Content-Type: application/json" \
--data '{
  "sessionId": "abc123",
  "case_type_1": "29^7",
  "search_year": "2024",
  "case_status": "Pending",
  "ct_captcha_code": "XXXX",
  "stateCode": "26",
  "distCode": "8",
  "courtComplexCode": "1260008",
  "estCode": "null"
}'
```

### 6️⃣ FETCH EVERYTHING (OPTIONAL / AUTO-LAYER RESOLUTION)
**Method:** POST

Combine steps 5 to 10 by allowing the backend to auto-fetch the case details, businesses, and PDFs automatically.

```bash
curl --location --request POST "http://127.0.0.1:3000/api/casetype/case-data" \
--header "Content-Type: application/json" \
--data '{
  "sessionId": "abc123",
  "case_type_1": "29^7",
  "search_year": "2024",
  "case_status": "Pending",
  "ct_captcha_code": "XXXX",
  "stateCode": "26",
  "distCode": "8",
  "courtComplexCode": "1260008",
  "estCode": "null",
  "fetchDetails": true,
  "fetchIABusiness": true,
  "fetchBusiness": true,
  "fetchPdf": true
}'
```

### 7️⃣ CASE DETAIL (LAYER 2)
**Method:** POST

Manually fetch deep case details if you omit `fetchDetails` in Step 5.

```bash
curl --location --request POST "http://127.0.0.1:3000/api/common/case-detail" \
--header "Content-Type: application/json" \
--data '{
  "sessionId": "abc123",
  "caseNo": "202900000012024",
  "cino": "DLCT110000012024",
  "courtCode": "5",
  "hideparty": "",
  "searchFlag": "CScaseNumber",
  "searchBy": "CScaseType",
  "stateCode": "26",
  "distCode": "8",
  "courtComplexCode": "1260008"
}'
```

### 8️⃣ IA BUSINESS (LAYER 3)
**Method:** POST

Manually fetch IA (Interlocutory Application) Business Details.

```bash
curl --location --request POST "http://127.0.0.1:3000/api/common/ia-business" \
--header "Content-Type: application/json" \
--data '{
  "sessionId": "abc123",
  "state_code": "26",
  "dist_code": "8",
  "court_complex_code": "1260008",
  "ia_no": "300000012024",
  "cinoia": "DLCT110000012024",
  "ia_case_type_name": "IA",
  "ia_filno": "1",
  "ia_filyear": "2024",
  "national_court_code": "DLCT11",
  "search_by": "CScaseType"
}'
```

### 9️⃣ BUSINESS ON DATE (LAYER 4)
**Method:** POST

Manually fetch hearing history / date business information.

```bash
curl --location --request POST "http://127.0.0.1:3000/api/common/business-detail" \
--header "Content-Type: application/json" \
--data '{
  "sessionId": "abc123",
  "cino": "DLCT110000012024",
  "court_code": "5",
  "state_code": "26",
  "dist_code": "8",
  "court_complex_code": "1260008",
  "nextdate1": "20260409",
  "case_number1": "DLCT110000012024",
  "disposal_flag": "Pending",
  "businessDate": "30-03-2026",
  "national_court_code": "DLCT11",
  "court_no": "13",
  "search_by": "CScaseType",
  "srno": "38"
}'
```

### 🔟 PDF METADATA (LAYER 5)
**Method:** POST

Manually resolve PDF endpoints/metadata. Values like `normal_v` and `case_val` should ONLY be sourced from the JSON output of Step 7.

```bash
curl --location --request POST "http://127.0.0.1:3000/api/common/order-pdf" \
--header "Content-Type: application/json" \
--data '{
  "sessionId": "abc123",
  "normal_v": "value_from_api",
  "case_val": "value_from_api",
  "court_code": "5",
  "filename": "order.pdf",
  "appFlag": ""
}'
```

### 1️⃣1️⃣ OPEN PDF (Visual/Browser Layer)
**Method:** GET

Direct link to pull PDF streams in the browser / proxy (GET mapping for the above). Note: URL encoded components like spaces must be properly formatted (e.g. `%20` or `+`).

```bash
curl --location --request GET "http://127.0.0.1:3000/api/common/order-pdf?sessionId=abc123&normal_v=XXX&case_val=YYY&court_code=5&filename=order.pdf&appFlag="
```
