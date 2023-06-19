const getHomepage = (req, res) => {
  res.send("Hello homepage");
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
