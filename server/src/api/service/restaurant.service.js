const model = require('../model/restaurant.model');

const getAll = () => model.getAll();

const getByName = (name) => model.getByName(name);

module.exports = { getAll, getByName };
