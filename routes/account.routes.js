var express = require('express');
var router = express.Router();

var {SignIn} = require('../controller/account.controler')
/* GET home page. */
router.get('/', SignIn);

module.exports = router;
