const mongoose = require('mongoose');

const projectSchema = mongoose.model(
    "Projects",
    new mongoose.Schema({
        "id": Number,
        "user_id": Number,
        "name": String,
        "budget": Number,
        "description": String
    })
)

const  Project = mongoose.model('', projectSchema, '')

module.exports = {
    Project
}