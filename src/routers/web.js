const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World! server");
});

router.get("/dat", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router;
