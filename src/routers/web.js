const express = require("express");
const router = express.Router();
const { getHomepage, getABC, dat } = require("../controllers/homeControllers");

router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/dat", dat);

router.get("/", (req, res) => {
  res.send("Hello World! server");
});

module.exports = router;
 