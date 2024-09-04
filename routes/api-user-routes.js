const express = require('express');
const router = express.Router();
const {
  getUsers,
  setUser,
  userLogin
 } = require('../controllers/user-controller.js');
const { postHeader } = require('../helpers/headerHandler.js');

router.get('/api/users', getUsers);

router.use('/api/signup', postHeader);
router.post('/api/signup', setUser);

router.use('/api/login', postHeader);
router.post('/api/login', userLogin)

module.exports = router