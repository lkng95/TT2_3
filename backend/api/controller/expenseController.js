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
  //   const projectId = req.params.projectId;
  const body = req.body;
  const user = req.body.created_by; // body assumed to have created_by field

  let addedExpense;
  try {
    const newExpense = new expense({ ...body, updated_by: user });
    addedExpense = await newExpense.save().toObject();
  } catch (error) {
    return next(error);
  }

  return res.status(OK).json({
    message: "Expense successfully added",
    expense: addedExpense,
  });
};

async function updateExpenseController(
  projectId,
  category_id,
  name,
  description,
  amount,
  updated_by,
  updated_at
) {
  apiLogger.info(`expense controller::: update expenses ${projectId}`);

  await expense.updateOne({ project_id: projectId }, { $set: { test: test } });
}

async function deleteExpenseController(projectId) {
  apiLogger.info(`expense controller::: delete expenses ${projectId}`);

  await expense.deleteOne({ project_id: projectId });
}

module.exports = {
  getExpenseController,
  addExpenseController,
  updateExpenseController,
  deleteExpenseController,
  addExpenseController,
};
