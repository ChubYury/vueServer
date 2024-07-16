const express = require('express');
const router = express.Router();
const { getCoaches } = require('../controllers/api-coaches-controller.js');
const mainHeader = require('../helpers/headerHandler.js')

router.get('/api/coaches', mainHeader, getCoaches);

module.exports = router