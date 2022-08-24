const jwt = require('jsonwebtoken');

const { SECRET } = process.env
  || 'B9G87H876h987HN875g76DJHS87dH598D7H8';

module.exports = (payload) => jwt.sign({ data: payload }, SECRET);
