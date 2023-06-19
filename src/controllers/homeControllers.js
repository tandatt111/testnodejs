const connection = require("../config/database");

const getHomepage = (req, res) => {
  let user = [];
  connection.query("SELECT *FROM Users u", function (err, results, fields) {
    user = results;
    console.log("results", results); // results contains rows returned by server

    //console.log("check user", user);
    res.send(JSON.stringify(user));
  });
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
