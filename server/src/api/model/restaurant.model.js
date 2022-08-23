const { restaurant, item } = require('../../database/models');

const getAll = () => restaurant.findAll({
  include: {
    model: item,
    as: 'items'
  }
});

module.exports = { getAll };
