const express = require('express');
const morgan = require('morgan')
const app = express();


const PORT = 3000;

app.use('/', (req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', function(req, res) {
  res.send('Welcome to the root route');
});

app.listen(PORT, function() {
  console.log('app listening on PORT:', PORT);
});
