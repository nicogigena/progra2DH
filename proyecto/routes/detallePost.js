var express = require('express');
var router = express.Router();
var detalleController = require('../controllers/detallePostController')

/* GET home page. */
router.get('/', detalleController.index);
router.get('/:id', detalleController.index);


module.exports = router;