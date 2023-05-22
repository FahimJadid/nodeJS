const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));

// All my handlers
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => {
  console.log(req.body);
});

const mongoClient = require('mongodb').mongoClient;

mongoClient.connect('mongodb-connection-string', (err, client) => {
  //
});

app.listen(3000, function () {
  console.log('Listening on 3000');
});
