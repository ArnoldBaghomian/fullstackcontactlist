var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'User Contact Info' });
});

module.exports = router;