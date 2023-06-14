const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
require("dotenv").config();
const webRouter = require("./routers/web");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//console.log(process.env);

configViewEngine(app);

app.use("/", webRouter);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
