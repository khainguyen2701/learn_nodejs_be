const connection = require("../config/db");

const handleGetHomePage = (req, res) => {
  connection.query("SELECT * FROM `Users`", function (err, results, fields) {
    res.render("index.ejs");
  });
};

module.exports = { handleGetHomePage };
