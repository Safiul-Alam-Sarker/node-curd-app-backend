const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
        default: 0,
    },quantity:{
        type: Number,
        required: true,
        default: 0
    },
    image:{
        type: String,
        required: false,
    }

})

const Product =  mongoose.model("Info", productSchema)
module.exports = Product;