var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql10.freemysqlhosting.net",
  user: "	sql10725595",
  password: "bWvpTgI5NR"
"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});