const express = require('express');
const userRoute = require('./User');
const restaurantRoute = require('./Restaurant');

const router = express.Router();

router.use('/user', userRoute);
router.use('/restaurant', restaurantRoute);

module.exports = router;
