// import mongoose
const mongoose = require("mongoose");

// build schema
const RequestSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required']
    },
    category: {
        type: String,
        required: [true, 'Email is required'],
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required']
    },
    detail :{
        type: String,
        required: [true, 'Detail is required']
    },
    destination : {
        type: String,
        required: [true, 'Destination is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    offer: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Offer"
    }],
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    
})

// model-ify the schema
const Request = mongoose.model('Request',RequestSchema)

// export
module.exports = Request