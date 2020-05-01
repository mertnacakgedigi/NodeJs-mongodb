const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    company_name : {
        type : String
    },
    password :{
        type : String,
        required : true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const User = mongoose.model('User',UserSchema );
module.exports = User