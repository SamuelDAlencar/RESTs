const { user } = require('../../database/models');

const getByEmail = (email) => user
  .findOne({
    where: { email },
  });

const register = (username, email, password) => user
  .create({ username, email, password });

module.exports = {
  getByEmail,
  register
};