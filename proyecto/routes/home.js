var express = require('express');
var router = express.Router();
var homeCont = require("../controllers/homeController")

/* GET home page. */
router.get('/', homeCont.index);
router.get('/agregarPost', homeCont.agregarPost);
router.get('/miPerfil', homeCont.miPerfil);


module.exports = router;