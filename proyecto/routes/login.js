var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController')
var homeController = require('../controllers/homeController')

/* GET home page. */
router.get('/', loginController.index);
router.get('/home', homeController.index);


module.exports = router;