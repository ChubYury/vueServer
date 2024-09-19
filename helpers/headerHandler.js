const mainHeader = (_req, res, next) => {
  
  res.set({
    'Access-Control-Allow-Origin': 'https://vlp-umber.vercel.app',
    'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE',
    'Content-Type': 'application/json'
  });
  
  next();
};

const postHeader = (_req, res, next) => {
  res.set(
    'Access-Control-Allow-Origin',
    'https://vlp-umber.vercel.app'
  );
  res.set(
    'Access-Control-Allow-Headers',
    'Content-Type'
  );

  next();
};

const authHeader = (_req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': 'https://vlp-umber.vercel.app',
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
