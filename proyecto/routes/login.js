var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController')


router.get('/', loginController.index);
router.post('/', loginController.login);

router.get('/forgot', loginController.email);
router.post('/forgot', loginController.forgot);
router.get('/forgot/:id', loginController.forgotId);
router.post('/forgot/:id', loginController.forgotIdPost);


module.exports = router;