const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart = new Schema({
    name: {type: String, require: true},
    price: {type: String, maxlength: 255},
    image: {type: String},
    quantity: {type: String, default: 1},
    from: {type: String}
})

module.exports = mongoose.model('Cart', Cart);