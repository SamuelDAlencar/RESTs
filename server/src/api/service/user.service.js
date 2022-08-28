const model = require('../model/user.model');
const httpError = require('../../utils/httpError');
const md5 = require('md5');
const generateToken = require('../../utils/generateToken');

const getByEmail = async (email) => {
  const encryptedEmail = md5(email);

  const user = await model.getByEmail(encryptedEmail);

  if (!user) throw httpError(404, 'Não encontramos um usuário com esse email, quer fazer um cadastro?');

  const { id, username } = user;

  return { id, email, username };
};

const logIn = async (email, password) => {
  const encryptedPassword = md5(password);
  const encryptedEmail = md5(email);

  const user = await model.getByEmail(encryptedEmail);
  
  if (!user) throw httpError(404, 'Não encontramos um usuário com esse email, quer fazer um cadastro?');
  if (user.password !== encryptedPassword) throw httpError(403, 'Senha incorreta');
  
  const { id, username } = user;

  const token = generateToken({ id, username });

  return { token, username, email };
};

const register = async (username, email, password) => {
  const encryptedPassword = md5(password);
  const encryptedEmail = md5(email);

  const userExists = await model.getByEmail(encryptedEmail);
  
  if (userExists) throw httpError(409, 'Um usuário com este email já esta registrado');

  const user = await model.register(username, encryptedEmail, encryptedPassword);
  
  const { id } = user;

  const token = generateToken({ id, username });

  return { token, username, email };
};

module.exports = {
  getByEmail,
  logIn,
  register
};