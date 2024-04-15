const connection = require("../config/db");

const handlePostCreateUser = (req, res) => {
  const { femail, fname, fcity } = req.body;
  connection.query(
    `INSERT INTO Users(email,name,city)
     values (?,?,?)`,
    [femail, fname, fcity],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
    }
  );
  res.send("Hello");
};

module.exports = { handlePostCreateUser };
