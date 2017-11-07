const express = require('express');
const router = express.Router();

/* models/data */
const tweetBank = require('../tweetBank');

router.get('/', function(req, res) {
  let tweets = tweetBank.list();
  //console.log(tweets);
  res.render('index', { tweets: tweets });
  //res.send('Welcome to the root route');
  /*    WHY POOP BED??
  res.render('index.html', people, function(err, output) {
    //if (err) throw err;
    //res.render('index.html', people);   why the hell does this fix the problem
  });
  */
});

router.get('/users/:name',function(req,res){
  var name = req.params.name;
  var tweets = tweetBank.find({name:name});
  res.render('index', {tweets:tweets});
  /*console.log(tweets.find(function(name){
    if (name === req.params.name){
      return true;
    }
    return false;
  }));*/
});

router.get('/tweets/:id',function(req,res){
  var id = req.params.id;
  var tweets = tweetBank.find({id:id});
  console.log(tweets);
  res.render('index',{tweets:tweets});
});

/*
// in some file that is in the root directory of our application... how about app.js?
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});
*/

module.exports = router;
