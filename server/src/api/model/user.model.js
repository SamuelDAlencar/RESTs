const { user } = require('../../database/models');

const logIn = (email) => user
  .findOne({
    where: { email },
  });

module.exports = {
  logIn
};