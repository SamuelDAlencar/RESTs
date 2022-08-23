const model = require('../model/user.model');
const md5 = require('md5');

const logIn = async (email, password) => {
  const encryptedPassword = md5(password);

  const user = await model.logIn(email, encryptedPassword);

  return user;
};

module.exports = {
  logIn
};