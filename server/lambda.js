const serverless = require("serverless-http");
const app = require("./app.js");

module.exports = app;
module.exports.handler = serverless(app);