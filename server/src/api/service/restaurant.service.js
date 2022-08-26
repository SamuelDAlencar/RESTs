const model = require('../model/restaurant.model');

const getAll = () => model.getAll();
const getByName = (name) => model.getByName(name);
const getById = (id) => model.getById(id);

module.exports = { getAll, getByName, getById };
