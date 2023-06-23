const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDservice");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getABC = (qes, res) => {
  res.send("check abc");
};

const dat = (qes, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  //console.log(">> email: ", email, "name:", name, "city:", city);
  // let {email, name, city} = req.body;

  /* connection.query(
    "INSERT INTO Users(email, name, city) VALUES(?, ?, ?);",
    [email, name, city],
    function (err, results) {
      //console.log(results);
      res.send("create user succeed");
    }
  ); */
  let [results, fields] = await connection.query(
    "INSERT INTO Users(email, name, city) VALUES(?, ?, ?);",
    [email, name, city]
  );

  res.send("succeed");
  /* connection.query("SELECT *FROM Users u", function (err, results, fields) {
    console.log("results", results); // results contains rows returned by server
    ///console.log("fields", fields); // fields contains extra meta data about results, if available
  }); */

  // const [results, fields] = await connection.query("SELECT *FROM Users u");
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

module.exports = {
  getHomepage,
  getABC,
  dat,
  postCreateUser,
  getCreatePage,
};
