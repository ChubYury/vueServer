const express = require('express');
const router = express.Router();
const { postHeader } = require('../helpers/headerHandler.js');
const {
  getUsers,
  setUser,
  userLogin
 } = require('../controllers/api-user-controller.js');

router.get('/api/users', getUsers);

router.use('/api/signup', postHeader);
router.post('/api/signup', setUser);

router.use('/api/login', postHeader);
router.post('/api/login', userLogin)

module.exports = router