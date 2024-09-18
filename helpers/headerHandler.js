const mainHeader = (_req, res, next) => {
  
  res.set({
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE',
    'Content-Type': 'application/json'
  });
  
  next();
};

const postHeader = (_req, res, next) => {
  res.set(
    'Access-Control-Allow-Origin',
    'http://localhost:8080'
  );
  res.set(
    'Access-Control-Allow-Headers',
    'Content-Type'
  );

  next();
};

const authHeader = (_req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE',
    'Access-Control-Allow-Headers': ['Authorization', 'Content-Type'],
  });
  
  next();
};

module.exports = {
  mainHeader,
  postHeader,
  authHeader
}
