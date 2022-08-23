const model = require('../model/restaurant.model');

const getAll = () => model.getAll();

module.exports = { getAll };
