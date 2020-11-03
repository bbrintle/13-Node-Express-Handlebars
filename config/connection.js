// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com ", //  localhost
  port: 3306,
  user: "bb1105db4edd7a", //  root
  password: "6b730aa7", // <== Your Password Here!  password 
  database: "heroku_7e017f0d24473c4" //  burgers_db
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;