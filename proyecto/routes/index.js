var express = require('express');
var router = express.Router();
var indexCont = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexCont.index);

module.exports = router;
