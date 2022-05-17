const Bill = require('../models/Bill')
const Carts = require('../models/Cart')
const ItalianCoffees = require('../models/ItalianCoffee')
const VietnameseCoffees = require('../models/VietnameseCoffee')
const { multipleMongooseToObject } = require('../../util/mongoose')
const { MongooseToObject } = require('../../util/mongoose')

class BillController {
    index(req, res, next) {
        res.render('coffee_shop/bill')
    }

    //[POST] /bill/store
    store(req, res, next) {
        var array = []
        Carts.find({}, function(err, item) {
            if(req.body.total != 0){
            array.push(...item)
            const bill = new Bill({items: array, name: req.body.name, email: req.body.email, tel: req.body.tel, address:req.body.address, total: req.body.total, ship: req.body.ship, note: req.body.note})
            bill.save()
                .then(() => { 
                    Carts.remove()
                        .then(() => res.render('coffee_shop/bill', {message: 'Your order has been successfully placed', products: multipleMongooseToObject(bill.items), info: MongooseToObject(bill)}))
                        .catch(next)
                })
                .catch(next)
            }else {
                res.render('coffee_shop/bill', {message: ''})
            }
        })
    }
}

module.exports = new BillController();