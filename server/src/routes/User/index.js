const express = require('express');
const router = express.Router();
const controller = require('../../api/controller/user.controller');

router.post('/', controller.logIn);

module.exports = router;
