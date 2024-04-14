require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const app = express();
const port = process.env.PORT || 3000;
const host_name = process.env.HOST_NAME || "localhost";

// test collection
const mysql2 = require("mysql2");

// configuration template engine
configViewEngine(app);

app.use("/", webRoutes);

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  database: "hoidanit",
  port: "3307",
  password: "123456"
});

connection.query("SELECT * FROM `Users`", function (err, results, fields) {
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});

app.listen(port, host_name, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = { connection };
