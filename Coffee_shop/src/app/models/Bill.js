const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bill = new Schema({
    name: {type: String, require: true},
    address: {type: String, maxlength: 255, require: true},
    tel: {type: String, require: true},
    email: {type: String, require: true},
    total: {type: String, require: true},
    items: {type: Array, require: true},
    note: {type: String},
    ship: {type: String, require: true},
})

module.exports = mongoose.model('Bill', Bill);