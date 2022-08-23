const { user } = require('../../database/models');

const logIn = (email, password) => user
  .findOne({
    where: {
      email, password
    }
  });

module.exports = {
  logIn
};