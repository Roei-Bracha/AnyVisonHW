const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username:  { type: String, required: true, unique: true },
    passwordHash:{ type: String, required: true},
    email:{ type: String, required: true, unique: true },
    cameras:[{
        url:String,
        active:Boolean
    }]
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel