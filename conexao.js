var express = require('express');
var mysql = require('mysql');

var app = express();
var port = process.env.PORT || 3000; // Render geralmente define a porta via variável de ambiente

var con = mysql.createConnection({
  host: "sql10.freemysqlhosting.net",
  user: "sql10725595",
  password: "bWvpTgI5NR"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', function(req, res) {
  res.send('Connected to the database!');
});

app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
});
