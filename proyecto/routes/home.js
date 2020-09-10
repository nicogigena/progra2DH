var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/agregarPost', function(req, res, next) {
    res.render('agregarPost', { title: 'Express' });
});
router.get('/miPerfil', function(req, res, next) {
    res.render('miPerfil', { title: 'Express' });
});


module.exports = router;