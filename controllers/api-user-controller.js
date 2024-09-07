const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcryptjs = require('bcryptjs');
const token = require('../helpers/create-tokens');


const getUsers = (_req, res) => {
  
  User
    .find()
    .exec()
    .then(users => res.send(users))
    .catch(err => console.log(err));
};

const setUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    const findUser = await User.findOne({email});
    
    if (findUser) return res.status(400).json({mess: 'User exist'});

    const hashPassword = bcryptjs.hashSync(password, 7);
    const user = new User({email, password: hashPassword});
    await user
          .save()
          .then(newUser => {
            console.log('Can set user: ', newUser);
            
            const newToken = token.generate(newUser._id);
            res.status(201).json({
              token: newToken,
              userId: newUser._id,
              expiresIn: token.options.expiresIn
            });
          })
          .catch(err => {
            res.status(503).json({
              mess: 'User not save',
              error: err
            })
          });
  } catch (error) {res.status(400).json({mess: 'Registration error'})};
};

const userLogin = async(req, res) => {
  try {
    const {email, password} = req.body;
    
    const findUser = await User.findOne({email});
    if (!findUser) return res.status(400).json({mess: 'User does not exist'});

    const checkPassword = bcryptjs.compareSync(password, findUser.password);
    if (!checkPassword) return res.status(400).json({mess: 'The user password is not correctly'})
    
      const newToken = token.generate(findUser._id);
      res.status(201).json({
        token: newToken,
        userId: findUser._id,
        expiresIn: token.options.expiresIn
      });  
  } catch (error) {res.status(400).json({mess: 'Authentification error'})};
};

module.exports = {
  getUsers,
  setUser,
  userLogin
};