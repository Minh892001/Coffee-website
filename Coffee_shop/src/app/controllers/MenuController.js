const ItalianCoffee = require('../models/ItalianCoffee')
const VietnameseCoffee = require('../models/VietnameseCoffee')
const HotDrinks = require('../models/HotDrink')
const Products = require('../models/Product')
const { multipleMongooseToObject } = require('../../util/mongoose')

class MenuController {
    index(req, res, next) {
        ItalianCoffee.find({})
            .then(x => {VietnameseCoffee.find({})
                .then(y => {HotDrinks.find({})
                    .then(z => {Products.find({})
                        .then(k => {
                                res.render('coffee_shop/menu', { x: multipleMongooseToObject(x), y: multipleMongooseToObject(y), z: multipleMongooseToObject(z), k: multipleMongooseToObject(k)})
                        })
                    })
                })
            })
            .catch(next);
    }

    search(req, res, next) {
        const temp1 = req.query.product.toLowerCase();
        const temp2 = req.query.product.toUpperCase();

        ItalianCoffee.find({$or: [{name: {$regex: temp1}}, {name: {$regex: temp2}}]})
        .then(x => {VietnameseCoffee.find({$or: [{name: {$regex: temp1}}, {name: {$regex: temp2}}]})
            .then(y => {HotDrinks.find({$or: [{name: {$regex: temp1}}, {name: {$regex: temp2}}]})
                .then(z => {Products.find({$or: [{name: {$regex: temp1}}, {name: {$regex: temp2}}]})
                    .then(k => {
                            res.render('coffee_shop/menu', { x: multipleMongooseToObject(x), y: multipleMongooseToObject(y), z: multipleMongooseToObject(z), k: multipleMongooseToObject(k)})
                    })
                })
            })
        })
        .catch(next);
    }

    aincrease(req, res, next) {
        ItalianCoffee.find({}).sort({name: 1})
        .then(x => {VietnameseCoffee.find({}).sort({name: 1})
            .then(y => {HotDrinks.find({}).sort({name: 1})
                .then(z => {Products.find({}).sort({name: 1})
                    .then(k => {
                            res.render('coffee_shop/menu', { x: multipleMongooseToObject(x), y: multipleMongooseToObject(y), z: multipleMongooseToObject(z), k: multipleMongooseToObject(k)})
                    })
                })
            })
        })
        .catch(next);
    }

    adecrease(req, res, next) {
        ItalianCoffee.find({}).sort({name: -1})
        .then(x => {VietnameseCoffee.find({}).sort({name: -1})
            .then(y => {HotDrinks.find({}).sort({name: -1})
                .then(z => {Products.find({}).sort({name: -1})
                    .then(k => {
                            res.render('coffee_shop/menu', { x: multipleMongooseToObject(x), y: multipleMongooseToObject(y), z: multipleMongooseToObject(z), k: multipleMongooseToObject(k)})
                    })
                })
            })
        })
        .catch(next);
    }

    pincrease(req, res, next) {
        ItalianCoffee.find({}).sort({price: 1})
        .then(x => {VietnameseCoffee.find({}).sort({price: 1})
            .then(y => {HotDrinks.find({}).sort({price: 1})
                .then(z => {Products.find({}).sort({price: 1})
                    .then(k => {
                            res.render('coffee_shop/menu', { x: multipleMongooseToObject(x), y: multipleMongooseToObject(y), z: multipleMongooseToObject(z), k: multipleMongooseToObject(k)})
                    })
                })
            })
        })
        .catch(next);
    }

    pdecrease(req, res, next) {
        ItalianCoffee.find({}).sort({price: -1})
        .then(x => {VietnameseCoffee.find({}).sort({price: -1})
            .then(y => {HotDrinks.find({}).sort({price: -1})
                .then(z => {Products.find({}).sort({price: -1})
                    .then(k => {
                            res.render('coffee_shop/menu', { x: multipleMongooseToObject(x), y: multipleMongooseToObject(y), z: multipleMongooseToObject(z), k: multipleMongooseToObject(k)})
                    })
                })
            })
        })
        .catch(next);
    }
}

module.exports = new MenuController();