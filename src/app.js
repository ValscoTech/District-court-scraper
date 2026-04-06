"use strict";

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const { corsOptions } = require("./config/cors");
const { requestLogger } = require("./middleware/request-logger.middleware");
const portalRoutes = require("./modules/portal/portal.routes");
const advocateNameRoutes = require("./modules/searches/advocate-name/advocate-name.routes");
const caseNumberRoutes = require("./modules/searches/case-number/case-number.routes");
const caseTypeRoutes = require("./modules/searches/case-type/case-type.routes");
const cnrRoutes = require("./modules/searches/cnr/cnr.routes");
const filingNumberRoutes = require("./modules/searches/filing-number/filing-number.routes");
const partyNameRoutes = require("./modules/searches/party-name/party-name.routes");
const { notFound } = require("./middleware/notFound");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

app.use("/api/common", portalRoutes);
app.use("/api/advocatename", advocateNameRoutes);
app.use("/api/casenumber", caseNumberRoutes);
app.use("/api/casetype", caseTypeRoutes);
app.use("/api/cnr", cnrRoutes);
app.use("/api/filingnumber", filingNumberRoutes);
app.use("/api/partyname", partyNameRoutes);

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use(notFound);
app.use(errorHandler);

module.exports = app;
