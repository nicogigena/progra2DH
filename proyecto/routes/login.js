var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController')

/* GET home page. */
router.get('/', loginController.index);


module.exports = router;