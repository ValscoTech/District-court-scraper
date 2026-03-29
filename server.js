"use strict";

const env = require("./src/config/env");
const app = require("./src/app");

app.listen(env.PORT, () => {
  console.log(`Jurident eCourts API listening on port ${env.PORT}`);
});

module.exports = app;
