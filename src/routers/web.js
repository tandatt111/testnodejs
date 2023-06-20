const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getABC,
  dat,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeControllers");

router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/dat", dat);

router.get("/create", getCreatePage);

router.post("/create-users", postCreateUser);

router.get("/", (req, res) => {
  res.send("Hello World! server");
});

module.exports = router;
