const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating schema
const UserSchema = new Schema({
    login:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    }
})

module.exports = User = mongoose.model('user',UserSchema,'users')