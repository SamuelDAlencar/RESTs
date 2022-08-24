const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string().email().required().empty(),
  password: joi.string().required().min(6).empty(),
});

const emailSchema = joi.object({
  email: joi.string().email().required().empty(),
});

module.exports = {
  loginSchema,
  emailSchema
};
