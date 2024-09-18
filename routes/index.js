const express = require('express');
const router = express.Router();
const apiUserRoutes = require('./api-user-routes.js');
const apiCoachesRoutes = require('./api-coaches-routes.js');
const apiRequestRoutes = require('./api-request-routes.js');

router.use(apiUserRoutes);
router.use(apiCoachesRoutes);
router.use(apiRequestRoutes);

module.exports = router