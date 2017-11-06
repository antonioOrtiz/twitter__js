const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', function(req, res) {
  res.send('Welcome to the root route');
});

app.listen(PORT, function() {
  console.log('app listening on PORT:', PORT);
});
