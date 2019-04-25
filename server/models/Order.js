const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating schema
const OrderSchema = new Schema({
    login:{
        type:String,
        required:true,

    },
    order:{
        type: Array,
        required:true
    }
})

module.exports = Order = mongoose.model('order',OrderSchema,"orders")