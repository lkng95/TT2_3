const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.port;

const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const projectRouter = require("./api/route/projectRoute");
app.use("/projects", projectRouter);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
module.exports = app;
