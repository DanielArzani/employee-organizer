require("dotenv").config();
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: DB_USER,
    password: DB_PW,
    database: DB_NAME,
  },
  console.log("connected to the database")
);

module.exports = db;
