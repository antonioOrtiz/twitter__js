const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const app = express();
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

/*
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates
*/

app.use(bodyParser.json())

const PORT = 3000;

const people = [{ name: 'Gandalf' }, { name: 'Frodo' }, { name: 'Hermione' }];

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {
  express: app, // ???????
  noCache: true
  //watch: true; chokidar?????
});

app.use(express.static('public'));

app.use('/', (req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// app.get('/stylesheets/style.css', function(req, res, next) {
//   console.log('hitting stylesheets');
//   res.sendFile(path.join(__dirname + '/public/stylesheets/style.css'));
// });

app.use('/', routes);

app.listen(PORT, function() {
  console.log('app listening on PORT:', PORT);
});
