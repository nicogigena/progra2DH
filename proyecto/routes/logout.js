var express = require('express');
var router = express.Router();
var logoutController = require('../controllers/logoutController')


router.get('/', logoutController.logout);
router.post('/', logoutController.logout);


module.exports = router;