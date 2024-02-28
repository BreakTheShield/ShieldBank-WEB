var mysql = require("mysql2");
var userdb = mysql.createConnection({
  host: "",
  user: "root",
  password: "gozld13!#",
  database: "dvba",
  dateStrings: "date",
});
module.exports = userdb;
