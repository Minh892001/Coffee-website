class AboutController {
    index(req, res, next) {
        res.render('coffee_shop/about')
    }
}

module.exports = new AboutController();