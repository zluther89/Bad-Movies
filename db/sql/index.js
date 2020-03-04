const mysql = require("mysql");
const mysqlConfig = require("../../config.js");

const connection = mysql.createConnection(mysqlConfig);

connection.query("SHOW TABLES", (err, data) => console.log(data));

module.exports = connection;
