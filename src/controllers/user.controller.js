const connection = require("../config/db");
const { getAllUsers } = require("../services/user.service");

const handlePostCreateUser = async (req, res) => {
  const { femail, fname, fcity } = req.body;
  const [results, fields] = await connection.query(
    `INSERT INTO Users(email,name,city)
     values (?,?,?)`,
    [femail, fname, fcity]
  );
  console.log({ results });
  res.send("Create done!");
};

const handleGetCreatePage = async (req, res) => {
  return res.render("create.ejs");
};

module.exports = { handlePostCreateUser, handleGetCreatePage };
