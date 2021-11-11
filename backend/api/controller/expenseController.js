const Project = require("../model/projectModel");
const Expense = require("../model/expenseModel");
const { errorFormatter } = require("../utils/errorFormatter");
const { OK } = require("http-status");

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

module.exports = { getExpenseController };
