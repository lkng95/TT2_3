const logger = require("pine/lib/logger");
const express = require("express");
const {
  getExpenseController,
  addExpenseController,
  updateExpenseController,
  deleteExpenseController
} = require("../controller/expenseController");

const router = express.Router();

router.get("/:projectId/view-expenses", getExpenseController);

router.post("/:projectId/add-expenses", addExpenseController);

router.put("/:projectId/update-expenses", async(req, res) => {
    let { projectId, name, description, amount, updated_by } = req.params
    if(projectId) {
      projectId = Number(projectId)
    }
    if(name) {
      name = String(name)
    }
    if(description) {
      description = String(description)
    }
    if(amount) {
      amount = Number(amount)
    }
    if(updated_by) {
      updated_by = String(updated_by)

    }



    console.log(`update expenses`);
    updateExpenseController(projectId, category_id, name, description, amount, updated_by, updated_at).then(data => res.json(data));
    
});

router.delete("/:projectId/delete-expenses", async(req, res) => {
  let { projectId } = req.params
  console.log(projectId)

  let { id } = req.body
  expenseId = Number(id)
  console.log(expenseId)
  deleteExpenseController(projectId, expenseId).then(data => res.json(data));
})


module.exports = router;
