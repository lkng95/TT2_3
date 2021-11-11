const express = require("express");
require("dotenv").config();

const app = express();
const port = 3001;

const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./api/route/index");
// const firebase = require('../budget-buddy/src/firebase')

// const auth = firebase.auth();
// var user = auth.currentUser();
// if(user) {


// } else {

// }

app.use("/manage", routes);


app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
module.exports = app;
