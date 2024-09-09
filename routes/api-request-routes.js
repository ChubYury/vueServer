const express = require('express');
const router = express.Router();
const { postHeader } = require('../helpers/headerHandler.js');
const { 
        setRequest 
      } = require('../controllers/api-request-controller.js');

router.use('/api/setrequest', postHeader);
router.post('/api/setrequest', setRequest);

module.exports = router
