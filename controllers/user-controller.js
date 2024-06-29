const mongoose = require('mongoose');
const User = mongoose.model('User');

const getUsers = (_req, res) => {
  
  User
    .find()
    .exec()
    .then(users => res.send(users)  )
    .catch(err => console.log(err));
};

module.exports = {
  getUsers
}