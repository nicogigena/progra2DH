var express = require('express');
var router = express.Router();
var detalleController = require('../controllers/detalleUsuarioController')

/* GET home page. */
router.get('/:id', detalleController.index);



module.exports = router;