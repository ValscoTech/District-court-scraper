# District-court-scraper Security Hardening Walkthrough

## 1. Purpose and Scope
This document covers the complete security-hardening implementation for District-court-scraper and the threats it addresses.

## 2. Security Architecture (Current)
- Frontend sends all traffic to District Gateway.
- Gateway signs `/api/*` requests with HMAC server-side.
- Internal District backend verifies HMAC before protected routes.
- Existing API contracts remain unchanged.

## 3. Request Flow (End-to-End)
1. Gateway receives client request.
2. Gateway applies security headers/CORS/rate controls.
3. Gateway generates `x-timestamp` and `x-signature` for `/api/*`.
4. Gateway forwards request to internal backend.
5. Backend applies Helmet, CORS, rate limiting, and request logging.
6. Backend verifies HMAC and timestamp validity.
7. Route/controller logic executes.
8. Not-found/error handlers return controlled output.

## 4. Controls and What They Prevent
- Helmet headers:
  Strengthens browser-side security posture.
- CORS allow-list:
  Prevents unauthorized browser origins in production.
- Rate limiting:
  Reduces high-volume abuse and scraping bursts.
- Gateway-only secret handling:
  Prevents frontend secret exposure.
- Backend HMAC verification:
  Prevents unsigned direct backend calls.
- Replay-window timestamp checks:
  Prevents reuse of captured signatures.
- Timing-safe signature comparison:
  Reduces timing attack risk in compare operation.
- Request logging + burst alerts:
  Detects suspicious traffic patterns early.
- Safe error handling:
  Prevents internal implementation leakage.

## 5. Threat Model Coverage
- Direct access to internal backend endpoints:
  Denied without valid gateway signature.
- Replay of old signed requests:
  Denied by timestamp expiration logic.
- Frontend reverse engineering for secret theft:
  No HMAC secret on client side.
- Automated scraping bursts:
  Rate-limited and logged.

## 6. Required Environment Variables
Gateway:
- `GATEWAY_PORT`
- `INTERNAL_SERVICE_URL`
- `INTERNAL_HMAC_SECRET` (preferred) or `HMAC_SECRET`

Backend:
- `PORT`
- `INTERNAL_HMAC_SECRET` (preferred) or `HMAC_SECRET`
- existing District envs (`ALLOWED_ORIGINS`, service config)

## 7. Deployment Boundary Rules
- Public endpoint = Gateway only.
- Backend must stay internal-only.
- Gateway/backend secret must match for that service pair.
- Rotate and audit secrets/signature failures periodically.

## 8. Verification Checklist
- Gateway `/health` returns `200`.
- Gateway `/api/*` succeeds without client HMAC headers.
- Direct backend `/api/*` without signature returns `401`.
- Tampered/expired signatures are rejected.

## 9. Operational Notes
- API names, payload keys, and frontend flow remain stable.
- Hardening is implemented by gateway + backend middleware layers.
