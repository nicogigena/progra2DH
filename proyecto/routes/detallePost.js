var express = require('express');
var router = express.Router();
var detalleCont = require('../controllers/detallePostController')

/* GET home page. */
router.get('/', detalleCont.index);


module.exports = router;