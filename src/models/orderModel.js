const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema( {
    name : String,
    category : String,
    price : Number,
});


module.exports = mongoose.model('order', orderSchema) 
