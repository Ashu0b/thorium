const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Author",
        unique : true,
        required : true
    },
    price: Number,
    ratings: Number,
    publisher_id : {
        type : ObjectId,
        ref : "Publisher",
        unique : true,
        required : true
    },


}, { timestamps: true });


module.exports = mongoose.model('ashisBook', bookSchema)
