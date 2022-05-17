const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: {type: String, require: true},
    password: {type: String, require: true},
    address: {type: String, maxlength: 255},
    email: { type: String},
    phone: {type: String},
    name: {type: String, require: true},
})


module.exports = mongoose.model('User', User);