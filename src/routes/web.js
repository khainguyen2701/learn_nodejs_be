const express = require("express");
const { handleGetHomePage } = require("../controllers/home.controller");
const { handlePostCreateUser } = require("../controllers/user.controller");
const router = express.Router();

router.get("/", handleGetHomePage);
router.post("/create-user", handlePostCreateUser);

module.exports = router;
