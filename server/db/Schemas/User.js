const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: String,
    passwordHash:String,
    email:String,
    cameras:{
        url:String,
        active:Boolean
    }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel