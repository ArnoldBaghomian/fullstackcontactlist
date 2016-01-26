var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addUser', { title: 'New User' });
});

router.post('/', function(req, res, next) {
	console.log("working plz")
fs.readFile('data.json', function(err, data)  {
  if (err) throw err;
  console.log(data);
});
	console.log(req.body)
  res.render('addUser', { obj: req.body });
});
module.exports = router;