var mysql = require("mysql2");

var connection = mysql.createConnection({
  // host: "localhost",
  host: "host.docker.internal",
  user: "root",
  port: 3306,
  password: "1234",
  // database: "jgboard",
  // dateStrings: "date",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database as id " + connection.threadId);
});

// connection.end();

module.exports = {
  connection,
};
