const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const app = express();
/*
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates
*/

const PORT = 3000;

const people = [
    {name: 'Gandalf'},
    {name: 'Frodo'},
    {name: 'Hermione'}
  ];

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {
  express: app, // ???????
  noCache: true
  //watch: true; chokidar?????
});

app.use('/', (req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', function(req, res) {
  res.render('index', {title: 'An Example', people: people});
  //res.send('Welcome to the root route');
  /*    WHY POOP BED??
  res.render('index.html', people, function(err, output) {
    //if (err) throw err;
    //res.render('index.html', people);   why the hell does this fix the problem
  });
  */
});

app.listen(PORT, function() {
  console.log('app listening on PORT:', PORT);
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
