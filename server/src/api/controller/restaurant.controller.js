const service = require('../service/restaurant.service');

const getAll = async (req, res) => {
  const restaurants = await service.getAll();

  return res.status(200).json(restaurants);
};

const getByName = async (req, res) => {
  const { name } = req.query;

  const restaurants = await service.getByName(name);

  return res.status(200).json(restaurants);
};

module.exports = { getAll, getByName };
