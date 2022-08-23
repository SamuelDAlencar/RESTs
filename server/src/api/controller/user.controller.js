const service = require('../service/user.service');

const logIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await service.logIn(email, password);

  return res.status(200).json(user);
};

module.exports = {
  logIn
};