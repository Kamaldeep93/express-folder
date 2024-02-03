var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WELCOME TO EXPRESS' });
});

// get about us page
router.get('/about',function(req,res,next){
  res.render('about',{title:'This is our first Express Genertor Project'});
});

module.exports = router;
