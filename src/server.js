require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routers/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//console.log(process.env);

configViewEngine(app);

app.use("/", webRouter);

/*connection.query("SELECT *FROM Users u", function (err, results, fields) {
  console.log("results", results); // results contains rows returned by server
  ///console.log("fields", fields); // fields contains extra meta data about results, if available
});*/

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
