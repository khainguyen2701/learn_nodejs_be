require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/db");
const app = express();
const port = process.env.PORT || 3000;
const host_name = process.env.HOST_NAME || "localhost";

// configuration template engine
configViewEngine(app);

app.use("/", webRoutes);

app.listen(port, host_name, () => {
  console.log(`Example app listening on port ${port}`);
});
