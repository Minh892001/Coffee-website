const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Coffee_Shop', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect')
    }catch(e) {
        console.log('Err')
    }
}

module.exports = { connect };