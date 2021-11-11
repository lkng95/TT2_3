const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const Project = mongoose.model('Model', projectSchema, 'project');

module.exports = {
  Project
};
