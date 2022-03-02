const { default: mongoose } = require("mongoose")


const authorSchema = new mongoose.Schema({
    author_id: {
        type: Number,
        required: true,
        unique: true
    },
    author_name: {
        type: String,
        required: true,
        unique: true
    },
    age: String,
    address: mongoose.Schema.Types.Mixed,
}, {timestamps: true});

module.exports = mongoose.model("Author", authorSchema)

