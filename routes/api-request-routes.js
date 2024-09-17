const express = require('express');
const router = express.Router();
const { postHeader,
        authHeader
      } = require('../helpers/headerHandler.js');
const { 
        setRequest,
        getRequests
      } = require('../controllers/api-request-controller.js');
const authMiddleware = require('../middlewares/authMiddleware.js')

router.use('/api/getrequests', authHeader);
router.get('/api/getrequests', authMiddleware, getRequests);

router.use('/api/setrequest', postHeader);
router.post('/api/setrequest', setRequest);

module.exports = router
