const mongoose = require("mongoose");

const Schema = mongoose.Schema,
ServiceSchema = new Schema({
    cardHead: String,
    cardBody: String,
    cardImg: String,
    cardAnchor: String
})

module.exports = mongoose.model('ServiceList',ServiceSchema);