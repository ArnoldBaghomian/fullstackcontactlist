var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile('./data.json', function(err, data){
    if (err) return res.status(400).send(err);
    var contactArr = JSON.parse(data);
    res.render('contacts', {});

  });
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


router.get('/info/:index',function(req,res,next){
  var indexOfUser = req.params.index;
  fs.readFile('./data.json',function(err,data){
     var peopleData = JSON.parse(data);
     var userInfo = peopleData[indexOfUser]
     res.render('contact',{user: userInfo})

  })



})



module.exports = router;