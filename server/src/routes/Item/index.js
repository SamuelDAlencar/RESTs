const express = require('express');
const router = express.Router();
const controller = require('../../api/controller/item.controller');
const validateAccess = require('../../middlewares/validateAccess');

router.get('/all', validateAccess, controller.getAll);
router.get('/', validateAccess, controller.getByQuery);
router.get('/:id', validateAccess, controller.getByRestaurant);

module.exports = router;
