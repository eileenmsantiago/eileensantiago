const serverless = require("serverless-http");
const app = require("../server/app.js");

module.exports = app;
module.exports.handler = serverless(app);