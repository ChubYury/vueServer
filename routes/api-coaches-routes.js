const express = require('express');
const router = express.Router();
const { getCoaches,
        setCoache } = require('../controllers/api-coaches-controller.js');
const {
        mainHeader,
        postHeader,
      } = require('../helpers/headerHandler.js')

router.get('/api/getCoaches', mainHeader, getCoaches);

router.use('/api/setCoache', postHeader);
router.post('/api/setCoache', setCoache);

module.exports = router