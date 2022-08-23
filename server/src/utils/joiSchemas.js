const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string().email().required().empty(),
  password: joi.string().required().min(6).empty(),
});

module.exports = {
  loginSchema
};
