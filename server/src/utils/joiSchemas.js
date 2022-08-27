const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string().email().required().empty(),
  password: joi.string().required().min(6).empty(),
});

const registerSchema = joi.object({
  username: joi.string().required().min(3).empty(),
  email: joi.string().email().required().empty(),
  password: joi.string().required().min(6).empty(),
});

const emailSchema = joi.object({
  email: joi.string().email().required().empty(),
});

module.exports = {
  loginSchema,
  registerSchema,
  emailSchema
};
