const { emailSchema } = require('../utils/joiSchemas');

module.exports = (req, res, next) => {
  const { error } = emailSchema.validate(req.params);

  if (error) return res.status(400).json({
    message: error.message
  });

  next();
};
