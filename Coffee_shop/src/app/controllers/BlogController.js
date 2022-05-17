class BlogController {
    index(req, res, next) {
        res.render('coffee_shop/blog')
    }
}

module.exports = new BlogController();