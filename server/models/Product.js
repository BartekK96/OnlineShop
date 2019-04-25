const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating schema
const ProductSchema = new Schema({
    price:{
        type:String,
        required:true,

    },
    name:{
        type: String,
        required:true
    },
    img:{
        type: String,
        required:true
    }
})

module.exports = Product = mongoose.model('product',ProductSchema,"products")