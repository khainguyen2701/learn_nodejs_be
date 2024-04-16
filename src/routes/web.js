const express = require("express");
const { handleGetHomePage } = require("../controllers/home.controller");
const {
  handlePostCreateUser,
  handleGetCreatePage
} = require("../controllers/user.controller");
const router = express.Router();

router.get("/", handleGetHomePage);
router.post("/create", handlePostCreateUser);
router.get("/create", handleGetCreatePage);

module.exports = router;
