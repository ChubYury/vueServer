const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  const token = authHeader.replace('Bearer ', '').trim();
  
  if (token === 'null') {
    res.status(401).json({mess: 'Token not provided!'});
    return;
  };
  
  jwt.verify(token, process.env.SECRET_KEY, (err, _dec) => {
    if (err instanceof jwt.TokenExpiredError) {
      res.status(400).json({mess: 'Token expired!'});
      return;
    };
  
    if (err instanceof jwt.JsonWebTokenError) {
      res.status(401).json({mess: 'Invalid token!'});
      return;
    };
  })
  
  next();
}