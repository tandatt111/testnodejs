const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
require("dotenv").config();
const webRouter = require("./routers/web");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//console.log(process.env);

configViewEngine(app);

app.use("/", webRouter);

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "tandatt",
  port: 3307,
  password: "123456",
});

connection.query("SELECT *FROM Users u", function (err, results, fields) {
  console.log("results", results); // results contains rows returned by server
  console.log("fields", fields); // fields contains extra meta data about results, if available
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
