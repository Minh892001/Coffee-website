const ItaliaCoffees = require('../models/ItalianCoffee')
const VietnameseCoffees = require('../models/VietnameseCoffee')
const User = require('../models/User')
const Product = require('../models/Product')
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    index1(req, res, next) {
        ItaliaCoffees.find({}, function (err,x) {
            VietnameseCoffees.find({}, function (err,y) {
                Product.find({}, function (err,z) {
                return res.render("home" , {x : multipleMongooseToObject(x) ,y : multipleMongooseToObject(y), z : multipleMongooseToObject(z)})
                })
            })
        })
    }
    
    index2(req, res, next) {
        ItaliaCoffees.find({}, function (err,x) {
            VietnameseCoffees.find({}, function (err,y) {
                Product.find({}, function (err,z) {
                return res.render("coffee_shop/user-homepage" , {x : multipleMongooseToObject(x) ,y : multipleMongooseToObject(y), z : multipleMongooseToObject(z)})
                })
            })
        })
    }
}

module.exports = new SiteController();