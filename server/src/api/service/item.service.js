const model = require('../model/item.model');

const getAll = async () => model.getAll();

const getByQuery = (name, description) => model.getByQuery(name, description);

module.exports = { getAll, getByQuery };
