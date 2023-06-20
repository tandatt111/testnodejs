const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const getABC = (qes, res) => {
  res.send("check abc");
};

const dat = (qes, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomepage,
  getABC,
  dat,
};
