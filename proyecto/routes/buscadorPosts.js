var express = require('express');
var router = express.Router();
var postsController = require('../controllers/postsController')

router.get('/', postsController.index);

module.exports = router;