var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')
var homeController = require('../controllers/homeController')

/* GET home page. */
router.get('/', indexController.redirect);
router.get('/registracion', indexController.index);
router.post('/registracion', indexController.store);
router.get('/home', homeController.index);
router.post('/home', homeController.index);



module.exports = router;
