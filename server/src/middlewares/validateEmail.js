const { emailSchema } = require('../utils/joiSchemas');

module.exports = (req, res, next) => {
  const { error } = emailSchema.validate(req.body);

  if (error) return res.status(404).json({
    message: error.message
  });

  next();
};
