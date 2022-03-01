const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    bookName : {
        type : String,
        required : true
    },
    authorName : String,
    totalPages : Number,
    year : Number,
    stockAvailable : Boolean,
    indianPrice : String,
    europeanPrice : String
})

module.exports = mongoose.model("Book", bookSchema)