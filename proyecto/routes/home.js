var express = require('express');
var router = express.Router();
var homeController = require("../controllers/homeController")

/* GET home page. */
router.get('/', homeController.index);
router.get('/agregarPost', homeController.agregarPost);
router.get('/miPerfil', homeController.miPerfil);


module.exports = router;