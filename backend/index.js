const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.port;

const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./api/route/index");
app.use("/manage", routes);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
module.exports = app;
