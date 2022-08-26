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

const getById = async (req, res) => {
  const { id } = req.params;

  const restaurant = await service.getById(id);

  return res.status(200).json(restaurant);
};

module.exports = { getAll, getByName, getById };
