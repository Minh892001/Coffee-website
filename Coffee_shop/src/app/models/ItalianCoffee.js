const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItalianCoffee = new Schema({
    name: {type: String, require: true},
    description: {type: String},
    image: {type: String, maxlength: 255},
    slug: { type: String, slug: 'name', unique: true},
    price: {type: String, maxlength: 255},
    actualprice: {type: String, maxlength: 255},
}, {
    timestamps: true
})

module.exports = mongoose.model('Italian Coffee', ItalianCoffee);