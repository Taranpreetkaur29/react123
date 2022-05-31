const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:String,
    lastName:String,
    email:String,
    role:String
});

module.exports = mongoose.model("employees", userSchema);