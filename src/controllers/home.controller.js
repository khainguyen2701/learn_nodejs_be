const connection = require("../config/db");

const handleGetHomePage = (req, res) => {
  connection.query("SELECT * FROM `Users`", function (err, results, fields) {
    res.send(JSON.stringify(results, req));
  });
};

module.exports = { handleGetHomePage };
