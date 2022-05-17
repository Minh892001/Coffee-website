const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VietNameseCoffee = new Schema({
    name: {type: String, require: true},
    description: {type: String},
    image: {type: String, maxlength: 255},
    price: {type: String, maxlength: 255},
    actualprice: {type: String, maxlength: 255},
    slug: {type: String, required: true},
}, {
    timestamps: true
})

module.exports = mongoose.model('Vietnamese Coffee', VietNameseCoffee);