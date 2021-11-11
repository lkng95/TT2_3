const project = require("../model/projectModel");
const expense = require("../model/expenseModel");
const { errorFormatter } = require("../utils/errorFormatter");
const { OK } = require("http-status");
const apiLogger = require("../logger/api.logger");
const { connect, disconnect } = require("../config/dbconfig");

const getExpenseController = async (req, res, next) => {
  const projectId = req.params.projectId;

  let projectExpenses;
  try {
    projectExpenses = await expense.find({ project_id: projectId });
  } catch (error) {
    return next(error);
  }

  if (projectExpenses.length <= 0) {
    return res.status(OK).json({ message: "No expenses found" });
  }

  return res.status(OK).json({ result: projectExpenses });
};

const addExpenseController = async (req, res, next) => {
  const projectId = req.params.projectId;
  const body = req.body;
  const user = req.body.created_by; // body assumed to have created_by field

  let addedExpense;
  try {
    const newExpense = new expense({
      ...body,
      project_id: projectId,
      updated_by: user,
    });
    addedExpense = await newExpense.save().toObject();
  } catch (error) {
    return next(error);
  }

  return res.status(OK).json({
    message: "Expense successfully added",
    expense: addedExpense,
  });
};

const updateExpenseController = async (req, res, next) => {
  const { id, name, description, amount } = req.body;

  let updates = {};
  if (name) updates.name = name;
  if (description) updates.description = description;
  if (amount) updates.amount = amount;

  let updatedExpense;
  try {
    updatedExpense = await expense.updateOne({ id: id }, updates);
  } catch (error) {
    return next(error);
  }

  return res.status(OK).json({
    message: "Expense successfully updated",
    updatedExpense: updatedExpense,
  });
};

async function deleteExpenseController(projectId, expenseId) {
  apiLogger.info(`expense controller::: delete expenses ${expenseId} , ${projectId}`);

  // await expense.deleteOne({ id: expenseId });
  
  let response = await expense.deleteOne({ 
    id: expenseId,
    project_id: projectId
   });
  console.log(response)

  if(!response) {
    return { message: "No expenses found" }
  } else {
    return response
  }
}

module.exports = {
  getExpenseController,
  addExpenseController,
  updateExpenseController,
  deleteExpenseController,
  addExpenseController,
};
