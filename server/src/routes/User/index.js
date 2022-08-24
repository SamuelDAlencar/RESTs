const express = require('express');
const router = express.Router();
const controller = require('../../api/controller/user.controller');
const validateEmail = require('../../middlewares/validateEmail');
const validateLogin = require('../../middlewares/validateLogin');

router.post('/email/:email', validateEmail, controller.getByEmail);
router.post('/login', validateLogin, controller.logIn);

module.exports = router;
