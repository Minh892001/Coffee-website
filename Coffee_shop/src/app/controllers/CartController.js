const Carts = require('../models/Cart')
const ItalianCoffees = require('../models/ItalianCoffee')
const VietnameseCoffees = require('../models/VietnameseCoffee')
const HotDrinks = require('../models/HotDrink')
const { multipleMongooseToObject } = require('../../util/mongoose')
const { MongooseToObject } = require('../../util/mongoose')

class CartController {
    index(req, res, next) {
        Carts.find({})
            .then(cart => res.render('coffee_shop/cart', {carts: multipleMongooseToObject(cart)}))
            .catch(next)
    }

    //[POST] /cart/store/:id
    store(req, res, next) {
        ItalianCoffees.findOne({_id: req.params.id}, function(err, product) {
            if(product) {
                Carts.findOne({name: product.name}, function(err, cart) {
                    if(cart == null) {
                        const temp = new Carts({_id: product._id, name: product.name, price: product.price, image: product.image, from: 'Italy'})
                        temp.save()
                            .then(() => res.redirect('/cart'))
                            .catch(next)
                    }else {
                        let x = new Number(cart.quantity) + 1
                        x = x.toString()
                        Carts.updateOne({name: cart.name}, {$set: {'quantity': x}})
                            .then(()=>res.redirect('/cart'))
                            .catch(next)
                    }
                })
            }else {
                VietnameseCoffees.findOne({_id: req.params.id}, function(err, product) {
                    if(product) {
                        Carts.findOne({name: product.name}, function(err, cart) {
                            if(cart == null) {
                                const temp = new Carts({name: product.name, price: product.price, image: product.image, from: 'VietNam'})
                                temp.save()
                                    .then(() => res.redirect('/cart'))
                                    .catch(next)
                            }else {
                                let x = new Number(cart.quantity) + 1
                                x = x.toString()
                                Carts.updateOne({name: cart.name}, {$set: {'quantity': x}})
                                    .then(()=>res.redirect('/cart'))
                                    .catch(next)
                            }
                        })
                    }else {
                        HotDrinks.findOne({_id: req.params.id}, function(err, product) {
                            if(product) {
                                Carts.findOne({name: product.name}, function(err, cart) {
                                    if(cart == null) {
                                        const temp = new Carts({name: product.name, price: product.price, image: product.image, from: 'VietNam'})
                                        temp.save()
                                            .then(() => res.redirect('/cart'))
                                            .catch(next)
                                    }else {
                                        let x = new Number(cart.quantity) + 1
                                        x = x.toString()
                                        Carts.updateOne({name: cart.name}, {$set: {'quantity': x}})
                                            .then(()=>res.redirect('/cart'))
                                            .catch(next)
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }

    //[POST] /cart/store2/:id
    store2(req, res, next) {
        ItalianCoffees.findOne({_id: req.params.id}, function(err, product) {
            if(product) {
                Carts.findOne({name: product.name}, function(err, cart) {
                    if(cart == null) {
                        const temp = new Carts({_id: product._id, name: product.name, price: product.price, image: product.image, from: 'Italy', quantity: req.body.quantity})
                        temp.save()
                            .then(() => res.redirect('/cart'))
                            .catch(next)
                    }else {
                        let x = new Number(cart.quantity)
                        x += new Number(req.body.quantity)
                        x = x.toString()
                        Carts.updateOne({name: cart.name}, {$set: {'quantity': x}})
                            .then(()=>res.redirect('/cart'))
                            .catch(next)
                    }
                })
            }else {
                VietnameseCoffees.findOne({_id: req.params.id}, function(err, product) {
                    if(product) {
                        Carts.findOne({name: product.name}, function(err, cart) {
                            if(cart == null) {
                                const temp = new Carts({name: product.name, price: product.price, image: product.image, from: 'VietNam', quantity: req.body.quantity})
                                temp.save()
                                    .then(() => res.redirect('/cart'))
                                    .catch(next)
                            }else {
                                let x = new Number(cart.quantity)
                                x += new Number(req.body.quantity)
                                x = x.toString()
                                Carts.updateOne({name: cart.name}, {$set: {'quantity': x}})
                                    .then(()=>res.redirect('/cart'))
                                    .catch(next)
                            }
                        })
                    }else {
                        HotDrinks.findOne({_id: req.params.id}, function(err, product) {
                            if(product) {
                                Carts.findOne({name: product.name}, function(err, cart) {
                                    if(cart == null) {
                                        const temp = new Carts({name: product.name, price: product.price, image: product.image, from: 'VietNam', quantity: req.body.quantity})
                                        temp.save()
                                            .then(() => res.redirect('/cart'))
                                            .catch(next)
                                    }else {
                                        let x = new Number(cart.quantity) 
                                        x += new Number(req.body.quantity)
                                        x = x.toString()
                                        Carts.updateOne({name: cart.name}, {$set: {'quantity': x}})
                                            .then(()=>res.redirect('/cart'))
                                            .catch(next)
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }


    //[DELETE] /cart/:id
    delete(req, res, next) {
        Carts.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CartController();