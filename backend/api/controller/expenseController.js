const Project = require("../model/projectModel");
const Expense = require("../model/expenseModel");
const { errorFormatter } = require("../utils/errorFormatter");
const { OK } = require("http-status");
const apiLogger = require("../logger/api.logger");
const { connect, disconnect } = require("../config/dbconfig");

const getExpenseController = async (req, res, next) => {
  const projectId = req.params.projectId;

  let projectExpenses;
  try {
    projectExpenses = await Project.find({ project_id: projectId });
  } catch (error) {
    return next(error);
  }

  if (projectExpenses.length <= 0) {
    return res.status(OK).json({ message: "No expenses found" });
  }

  return res.status(OK).json({ result: projectExpenses });
};

const addExpenseController = async (req, res, next) => {
  
}

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

  await Expense.updateOne({ project_id: projectId }, { $set: { test: test } });
}

async function deleteExpenseController(projectId) {
  apiLogger.info(`expense controller::: delete expenses ${projectId}`);

  await Expense.deleteOne({ project_id: projectId });
}

module.exports = {
  getExpenseController,
  updateExpenseController,
  deleteExpenseController,
  addExpenseController
};
