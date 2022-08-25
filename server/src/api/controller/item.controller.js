const service = require('../service/item.service.js');

const getAll = async (_req, res) => {
  const items = await service.getAll();

  return res.status(200).json(items);
};

const getByQuery = async (req, res) => {
  const { name, description } = req.query;

  const items = await service.getByQuery(name, description);

  return res.status(200).json(items);
};

module.exports = { getAll, getByQuery };
