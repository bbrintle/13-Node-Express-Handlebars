// Set up MySQL connection.
var mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createConnection({
  host: dbConfig.HOST, //  localhost
  port: 3306,
  user: dbConfig.USER, //  root
  password: dbConfig.PASSWORD, // <== Your Password Here!  password 
  database: dbConfig.DB //  burgers_db
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