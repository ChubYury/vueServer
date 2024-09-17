const express = require('express');
const router = express.Router();
const morgan = require('morgan');

router.use(morgan(':remote-addr[:date[clf]]" :method :url HTTP/:http-version" :status :req[content-length] :res[content-length]'));
router.use(express.urlencoded({extended: true}));
router.use(express.json());

module.exports = router;