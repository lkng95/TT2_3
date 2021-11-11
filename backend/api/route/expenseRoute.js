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

router.delete("/:projectId/delete-expenses", deleteExpenseController);

// router.put("/:projectId/update-expenses", async(req, res) => {
//     let { projectId, category_id, name, description, amount, updated_by } = req.params
//     projectId = Number(projectId)
//     category_id = Number(category_id)
//     name = String(name)
//     description = String(description)
//     amount = Number(amount)
//     updated_by = String(updated_by)

//     console.log(`update expenses`);
//     updateExpenseController(projectId, category_id, name, description, amount, updated_by, updated_at).then(data => res.json(data));

// });

module.exports = router;
