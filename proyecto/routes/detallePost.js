var express = require('express');
var router = express.Router();
var detallePostController = require('../controllers/detallePostController')

/* GET home page. */
router.get('/', detallePostController.index);
router.get('/:id', detallePostController.porId);
router.post('/:id',detallePostController.destroy);
router.get('/editar/:id', detallePostController.edit);
router.post('/editar/:id', detallePostController.update);
router.get('/:id/comentar', detallePostController.comentar)

module.exports = router;