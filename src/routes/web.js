const express = require("express");
const { handleGetHomePage } = require("../controllers/home.controller");
const router = express.Router();

router.get("/", handleGetHomePage);

module.exports = router;
