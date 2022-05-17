const { multipleMongooseToObject } = require('../../util/mongoose')

class ProfileController {
    index(req, res, next) {
        if(!req.session.isAuthenticated) {
            res.redirect('/login')
        }else {
            res.render('coffee_shop/profile')
        }
        console.log(req.session.authUser)
    }
}

module.exports = new ProfileController();