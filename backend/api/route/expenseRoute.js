const logger = require("pine/lib/logger");
const express = require("express");
const {
  getExpenseController,
  addExpenseController,
} = require("../controllers/expenseController");
const { route } = require("../..");

const router = express.Router();

router.get("/:projectId/view-expenses", getExpenseController);

router.post("/:projectId/add-expenses", addExpenseController);

module.exports = router;
