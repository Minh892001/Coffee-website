const ItalianCoffees = require('../models/ItalianCoffee')
const VietnameseCoffees = require('../models/VietnameseCoffee')
const HotDrinks = require('../models/HotDrink')
const { multipleMongooseToObject } = require('../../util/mongoose')
const { MongooseToObject } = require('../../util/mongoose')

class DetailController {
    show(req, res) {
        ItalianCoffees.findOne({slug: req.params.slug}, function(err, Coffee) {
            if(Coffee) {
                ItalianCoffees.find({slug: {$ne: req.params.slug}}, function(err, relatedProduct1) {
                    VietnameseCoffees.find({slug: {$ne: req.params.slug}}, function(err, relatedProduct2) {
                        res.render('coffee_shop/show', { Coffee: MongooseToObject(Coffee), relatedProducts1: multipleMongooseToObject(relatedProduct1), relatedProducts2: multipleMongooseToObject(relatedProduct2)})
                    })
                })
            }else {
                VietnameseCoffees.findOne({slug: req.params.slug}, function(err, Coffee) {
                    if(Coffee) {
                        ItalianCoffees.find({slug: {$ne: req.params.slug}}, function(err, relatedProduct1) {
                            VietnameseCoffees.find({slug: {$ne: req.params.slug}}, function(err, relatedProduct2) {
                                res.render('coffee_shop/show', { Coffee: MongooseToObject(Coffee), relatedProducts1: multipleMongooseToObject(relatedProduct1), relatedProducts2: multipleMongooseToObject(relatedProduct2)})
                            })
                        })
                    }else{
                        HotDrinks.findOne({slug: req.params.slug}, function(err, Coffee) {
                            if(Coffee) {
                                ItalianCoffees.find({slug: {$ne: req.params.slug}}, function(err, relatedProduct1) {
                                    VietnameseCoffees.find({slug: {$ne: req.params.slug}}, function(err, relatedProduct2) {
                                        res.render('coffee_shop/show', { Coffee: MongooseToObject(Coffee), relatedProducts1: multipleMongooseToObject(relatedProduct1), relatedProducts2: multipleMongooseToObject(relatedProduct2)})
                                    })
                                })
                            }
                        })
                    }
                })
            }
        })
    }
}

module.exports = new DetailController();