// import mongoose
const mongoose = require("mongoose");

// build schema
const OfferSchema = mongoose.Schema({
    price: {
        type: String,
        required: [true, 'Price is required']
    },
    eta :{
        type: Date,
        required: [true, 'Detail is required']   
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    
})

// model-ify the schema
const Offer = mongoose.model('Offer', OfferSchema)

// export
module.exports = Offer