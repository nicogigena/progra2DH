var express = require('express');
var router = express.Router();
var loginCont = require('../controllers/loginController')

/* GET home page. */
router.get('/', loginCont.index);


module.exports = router;