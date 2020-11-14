var express = require('express');
var router = express.Router();
var detalleUsuarioController = require('../controllers/detalleUsuarioController')

/* GET home page. */
router.get('/:id', detalleUsuarioController.index);
router.get('/comentarios/:idUsuario', detalleUsuarioController.show);


module.exports = router;