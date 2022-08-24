const { user } = require('../../database/models');

const getByEmail = (email) => user
  .findOne({
    where: { email },
  });

module.exports = {
  getByEmail
};