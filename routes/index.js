const express = require('express');
const router = express.Router();
const userRoutes = require('./user-routes.js');
const apiUserRoutes = require('./api-user-routes.js');

router.use(userRoutes);
router.use(apiUserRoutes);

module.exports = router