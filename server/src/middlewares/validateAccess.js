const decodeToken = require('../utils/decodeToken');
const httpError = require('../utils/httpError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const { data } = decodeToken(authorization);

    req.user = data;

    return next();
  } catch (error) {
    return next(httpError(403, 'Usuário inválido'));
  }
};
