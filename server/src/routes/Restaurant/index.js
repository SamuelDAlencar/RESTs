const express = require('express');
const router = express.Router();
const controller = require('../../api/controller/restaurant.controller');

router.get('/', controller.getAll);

module.exports = router;
