class PurchaseController {
    index(req, res, next) {
        res.render('coffee_shop/purchase')
    }
}

module.exports = new PurchaseController();