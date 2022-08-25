const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { restaurant } = require('../../database/models');

const getAll = () => restaurant.findAll();

const getByName = (name) => restaurant.findAll({
  where: { name: { [Op.like]: `%${name}%` } }
});

module.exports = { getAll, getByName };
