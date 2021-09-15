const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    title: {
            type:String,
            required: [true, "must have a title!"],
            minLength: [3, "need at least 3 characters!"]
    },
    price: {
            type: Number,
            required: [true, "must have a price!"],
            required: [true, "must have a rating!"],
            min: 0,
    },
    description: {
            type: String,
            required: [true, "must have a description!"],
            minLength: [3, "need at least 3 characters!"]
    }
}, {timestamps:true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;