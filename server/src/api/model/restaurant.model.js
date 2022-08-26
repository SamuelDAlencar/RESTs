const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { restaurant } = require('../../database/models');

const getAll = () => restaurant.findAll();

const getByName = (name) => restaurant.findAll({
  where: { name: { [Op.like]: `%${name}%` } }
});

const getById = (id) => restaurant.findOne({
  where: { id }
});

module.exports = { getAll, getByName, getById };
