var express = require('express');
var router = express.Router();
var detalleController = require('../controllers/detalleUsuarioController')

/* GET home page. */
router.get('/', detalleController.index);



module.exports = router;