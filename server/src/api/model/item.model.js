const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { item } = require('../../database/models');

const getAll = () => item.findAll();

const getByQuery = (name, description) => item.findAll({
  where: {
    [Op.or]: [
      {
        name: {
          [Op.like]: `%${name}%`
        },
      },
      {
        description: {
          [Op.like]: `%${description}%`
        },
      }
    ]
  }
});

module.exports = { getAll, getByQuery };
