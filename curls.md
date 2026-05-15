# District Court CURLS + Postman Raw JSON

Base URL:
`https://<your-district-domain>`

Health:
```bash
curl "https://<your-district-domain>/health"
```

Most routes are under `/api/*`.

## 1. Init Session
```bash
curl -X POST "https://<your-district-domain>/api/common/init" \
  -H "Content-Type: application/json" \
  -d '{"stateCode":"26"}'
```

Postman Body -> raw -> JSON
```json
{
  "stateCode": "26"
}
```

## 2. Captcha
```bash
curl "https://<your-district-domain>/api/common/captcha?sessionId=<sessionId>"
```

## 3. Set Fields
```bash
curl -X POST "https://<your-district-domain>/api/common/set-fields" \
  -H "Content-Type: application/json" \
  -d '{
    "sessionId": "<sessionId>",
    "stateCode": "26",
    "distCode": "8",
    "complexCode": "1260008",
    "estCode": "5"
  }'
```

Postman Body -> raw -> JSON
```json
{
  "sessionId": "<sessionId>",
  "stateCode": "26",
  "distCode": "8",
  "complexCode": "1260008",
  "estCode": "5"
}
```

## 4. Party Name Search
```bash
curl -X POST "https://<your-district-domain>/api/partyname/case-data" \
  -H "Content-Type: application/json" \
  -d '{
    "sessionId": "<sessionId>",
    "stateCode": "26",
    "distCode": "8",
    "courtComplexCode": "1260008",
    "estCode": "5",
    "partyName": "RAHUL",
    "partyType": "P",
    "caseStatus": "Pending",
    "captcha": "AB12C"
  }'
```

Postman Body -> raw -> JSON
```json
{
  "sessionId": "<sessionId>",
  "stateCode": "26",
  "distCode": "8",
  "courtComplexCode": "1260008",
  "estCode": "5",
  "partyName": "RAHUL",
  "partyType": "P",
  "caseStatus": "Pending",
  "captcha": "AB12C"
}
```

## 5. Case Number Search
```bash
curl -X POST "https://<your-district-domain>/api/casenumber/case-data" \
  -H "Content-Type: application/json" \
  -d '{
    "sessionId": "<sessionId>",
    "stateCode": "26",
    "distCode": "8",
    "courtComplexCode": "1260008",
    "caseType": "1",
    "caseNo": "123",
    "caseYear": "2024",
    "captcha": "AB12C"
  }'
```

## 6. CNR Search
```bash
curl -X POST "https://<your-district-domain>/api/cnr/search" \
  -H "Content-Type: application/json" \
  -d '{
    "sessionId": "<sessionId>",
    "cnrNumber": "DLCT010000012024",
    "captcha": "AB12C"
  }'
```

## 7. Case Detail + Order PDF
```bash
curl -X POST "https://<your-district-domain>/api/common/case-detail" \
  -H "Content-Type: application/json" \
  -d '{"sessionId":"<sessionId>","cino":"<cino>"}'

curl "https://<your-district-domain>/api/partyname/order-pdf?sessionId=<sessionId>&orderPath=<orderPath>" -o order.pdf
```
