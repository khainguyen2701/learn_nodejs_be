require("dotenv").config();
// test collection
const mysql2 = require("mysql2/promise");
const connection = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0
});

module.exports = connection;
