const connection = require("../config/db");

const handleGetHomePage = async (req, res) => {
  const [results, fields] = await connection.query("select * from Users u");
  console.log({ results });
  return res.render("index.ejs", { users: results });
};

module.exports = { handleGetHomePage };
