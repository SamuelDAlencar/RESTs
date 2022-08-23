const model = require('../model/user.model');
const md5 = require('md5');
const httpError = require('../../utils/httpError');

const logIn = async (email, password) => {
  const encryptedPassword = md5(password);

  const user = await model.logIn(email);

  if (!user) throw httpError(404, 'Não encontramos um usuário com esse email');

  if (user.password !== encryptedPassword) throw httpError(403, 'Senha incorreta');
  
  return user;
};

module.exports = {
  logIn
};