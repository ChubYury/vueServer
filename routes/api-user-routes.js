const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/user-controller.js');

router.get('/api/users', getUsers);

module.exports = router