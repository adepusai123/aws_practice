
const express = require("express");
const serverless = require("serverless-http");
const cors = require('cors');
const util = require('util');
const router = require('./routes');
const { PARAMS } = require('./utils');

const app = express();

global.PARAMS = PARAMS;

app.use(cors());
app.use(express.json());
app.use(util.format('%s/%s', PARAMS.basePath, PARAMS.currentVersion), router);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
