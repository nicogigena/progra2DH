var express = require('express');
var router = express.Router();
var homeController = require("../controllers/homeController")

/* GET home page. */
router.get('/', homeController.index);

router.get('/agregarPost', homeController.agregarPost);
router.post('/agregarPost', homeController.storePost);

router.get('/miPerfil', homeController.miPerfil);
router.post('/miPerfil', homeController.miPerfilEdit);

router.get('/miPerfil/edit', homeController.miPerfilEditTodo);
router.post('/miPerfil/edit', homeController.miPerfilEditTodoPost);


module.exports = router;