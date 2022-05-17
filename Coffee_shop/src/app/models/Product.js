const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: {type: String, require: true},
    description: {type: String},
    image: {type: String, maxlength: 255},
    price: {type: String, maxlength: 255},
    slug: {type: String, require: true}
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', Product);