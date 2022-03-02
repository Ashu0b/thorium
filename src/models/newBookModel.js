const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newBookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Ashisauthor",
    },
    price: Number,
    ratings: Number,
    publisher_id: {
        type: ObjectId,
        ref : "Ashispublisher"
    }


}, { timestamps: true });


module.exports = mongoose.model('Ashisbook', newBookSchema)
