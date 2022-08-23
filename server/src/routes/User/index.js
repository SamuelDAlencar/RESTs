const express = require('express');
const router = express.Router();
const controller = require('../../api/controller/user.controller');
const validateLogin = require('../../middlewares/validateLogin');

router.post('/', validateLogin, controller.logIn);

module.exports = router;
