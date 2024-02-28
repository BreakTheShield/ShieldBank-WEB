var mysql = require("mysql2");
var db = mysql.createConnection({
  host: "",
  user: "root",
  password: "gozld13!#",
  database: "board",
  dateStrings: "date",
});
module.exports = db;
