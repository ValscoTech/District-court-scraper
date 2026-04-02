"use strict";

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const { corsOptions } = require("./config/cors");
const { requestLogger } = require("./middleware/request-logger.middleware");
const portalRoutes = require("./modules/portal/portal.routes");
const partyNameRoutes = require("./modules/searches/party-name/party-name.routes");
<<<<<<< HEAD
const caseNumberRoutes = require("./modules/searches/case-number/case-number.routes");
=======
>>>>>>> origin/main
const { notFound } = require("./middleware/notFound");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

app.use("/api/common", portalRoutes);
app.use("/api/partyname", partyNameRoutes);
<<<<<<< HEAD
app.use("/api/casenumber", caseNumberRoutes);
=======
>>>>>>> origin/main

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use(notFound);
app.use(errorHandler);

module.exports = app;
