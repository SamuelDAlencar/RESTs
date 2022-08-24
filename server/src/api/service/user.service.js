const model = require('../model/user.model');
const httpError = require('../../utils/httpError');
const md5 = require('md5');

const getByEmail = async (email) => {
  const encryptedEmail = md5(email);

  const user = await model.getByEmail(encryptedEmail);

  if (!user) throw httpError(404, 'Não encontramos um usuário com esse email, quer fazer um cadastro?');

  return user;
};

const logIn = async (email, password) => {
  const encryptedPassword = md5(password);
  const encryptedEmail = md5(email);

  const user = await model.getByEmail(encryptedEmail);
  
  if (!user) throw httpError(404, 'Não encontramos um usuário com esse email, quer fazer um cadastro?');
  if (user.password !== encryptedPassword) throw httpError(403, 'Senha incorreta');
  
  return user;
};

module.exports = {
  getByEmail,
  logIn
};