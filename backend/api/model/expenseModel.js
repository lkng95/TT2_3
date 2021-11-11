const mongoose = require("mongoose");

const expenseModel = mongoose.Schema(
  {
    project_id: {
      type: Number,
      required: true,
    },
    category_id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", expenseModel);
