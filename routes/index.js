var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/', function(req, res, next) {
  fs.readFile('./data.json', function(err, data){
  	if (err) return res.status(400).send(err);
    console.log(data)
    var contactArr = JSON.parse(data);
    console.log(contactArr);
	res.render('index', { data: contactArr });
  })
});

router.post('/add', function(req, res, next){
    console.log("IN USERS/ADD ROUTE!!!!!", req.body)
    fs.readFile('./data.json', function(err, data){
      console.log(err)
      if (err) return res.status(400).send(err);
      console.log(data)

      var contactArr = JSON.parse(data);
      var newContact = req.body;
      contactArr.push(newContact);
      console.log(contactArr);

      fs.writeFile('./data.json', JSON.stringify(contactArr), function(err){
        if (err) return res.status(400).send(err);
        res.render('users', {data : contactArr});
      });
    });
});



module.exports = router;