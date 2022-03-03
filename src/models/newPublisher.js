const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
    name: String,
    headquater: String

}, { timestamps: true });

module.exports = mongoose.model('ashispublisher', publisherSchema)