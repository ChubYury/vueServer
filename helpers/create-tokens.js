const jwt = require('jsonwebtoken');

const options = {
  type: 'refresh',
  expiresIn: 3600
}
const generate = id => {
  const payload = {
    id: id,
    type: options.type
  };

  const option = { expiresIn: options.expiresIn };
  return jwt.sign(payload, process.env.SECRET_KEY, option)
};

module.exports = {
  options,
  generate
}