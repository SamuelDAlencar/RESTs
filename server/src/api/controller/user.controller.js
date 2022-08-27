const service = require('../service/user.service');

const getByEmail = async (req, res) => {
  const { email } = req.params;

  const user = await service.getByEmail(email);

  return res.status(200).json(user);
};

const logIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await service.logIn(email, password);

  return res.status(200).json(user);
};

const register = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await service.register(username, email, password);

  return res.status(201).json(user);
};

module.exports = {
  getByEmail,
  logIn,
  register
};
