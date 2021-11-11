const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    user_id: {
        type: Number
    },
    name: {
        name: String
    },
    appointment: {
        description: String
    }, 
    id: {
        type: Number
    }
})


const User = mongoose.model('Model2', userSchema, "user" );

module.exports = {
  User,
};
