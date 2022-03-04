const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    price: Number,
    ratings: Number,
    author_id: {
        type: ObjectId,
        ref: "Author",
        unique : true,
        required : true
    },
    publisher_id : {
        type : ObjectId,
        ref : "Publisher",
        unique : true,
        required : true
    },
    isHardCover : {
        type : Boolean,
        default : false,

    },
 

},{ timestamps: true });


module.exports = mongoose.model('ashisBook', bookSchema)
