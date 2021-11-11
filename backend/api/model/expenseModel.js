const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
    },
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
    created_by: {
      type: String,
      required: true,
    },
    updated_by: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("expense", expenseSchema);
