const logger = require("pine/lib/logger");
const express = require("express");
const {
  getExpenseController,
  addExpenseController,
  updateExpenseController
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



module.exports = router;
