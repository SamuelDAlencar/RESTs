const model = require('../model/item.model');

const getAll = async () => model.getAll();

const getByQuery = (name, description) => model.getByQuery(name, description);

const getByRestaurant = (id) => model.getByRestaurant(id);

module.exports = { getAll, getByQuery, getByRestaurant };
