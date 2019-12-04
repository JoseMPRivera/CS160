const mysql = require('mysql');


const con = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
  user: "root",
  password: "sh100",
  database: "cs160"
})
// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "cs160"
// });

module.exports = con;