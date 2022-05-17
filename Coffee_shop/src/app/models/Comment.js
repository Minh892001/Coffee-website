const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    name: {type: String, require: true},
    type: {type: String, require: true},
    comment: {type: String, require: true},
}, {
    timestamps: true
})

module.exports = mongoose.model('Comment', Comment);