const express = require('express');
const userRoute = require('./User');
const restaurantRoute = require('./Restaurant');
const itemRoute = require('./Item');

const router = express.Router();

router.use('/user', userRoute);
router.use('/restaurant', restaurantRoute);
router.use('/item', itemRoute);

module.exports = router;
