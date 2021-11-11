const logger = require("pine/lib/logger");
const express = require("express");
const {
  getExpenseController,
  addExpenseController,
  updateExpenseController,
  deleteExpenseController,
} = require("../controller/expenseController");

const router = express.Router();

router.get("/:projectId/view-expenses", getExpenseController);

router.post("/:projectId/add-expenses", addExpenseController);

router.patch("/:projectId/update-expenses", updateExpenseController);

router.delete("/:projectId/delete-expenses", async (req, res) => {
  let { projectId } = req.params;
  console.log(projectId);

  let { id } = req.body;
  expenseId = Number(id);
  console.log(expenseId);
  deleteExpenseController(projectId, expenseId).then((data) => res.json(data));
});

module.exports = router;
