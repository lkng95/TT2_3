const logger = require("pine/lib/logger");
const express = require("express");
const projectControler = require("../controllers/projectController");

const router = express.Router();

router.get("/all", async (req, res) => {
  console.log(`get projects`);
  projectControler.getAccounts().then((data) => res.json(data));
});
