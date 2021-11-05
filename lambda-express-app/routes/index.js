const express = require('express');
const router = express.Router();
const user = require('./user');

router.use(`/${user.uri}`, user.router);

module.exports = router;