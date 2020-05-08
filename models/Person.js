
const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    type: {
        type: String,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    requests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Request"
    }],
    offers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Offer"
    }],
})

const User = mongoose.model('User', UserSchema)


module.exports = User