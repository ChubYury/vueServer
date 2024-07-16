const mainHeader = (req, res, next) => {
  
  // res.setHeader(
  //   'Access-Control-Allow-Origin',
  //   'http://localhost:8080'
  // )
  // res.setHeader(
  //   'Access-Control-Allow-Headers',
  //   'Content-Type'
  // )
  res.set({
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Access-Control-Allow-Methods': 'OPTION,GET,POST,PUT,DELETE',
    'Content-Type': 'application/json'
  });
  
  next();
}

module.exports = mainHeader
