const Users = require('../models/User')
const { multipleMongooseToObject } = require('../../util/mongoose')
const { MongooseToObject } = require('../../util/mongoose')

var passprt = require('passport')
const passport = require('passport')

class UserController {
    //[GET] /register
    index(req, res, next) {
        res.render('coffee_shop/register')
    }

    //[POST] /register/store
    store(req, res, next) {
        Users.findOne({username: req.body.username}, function(err, user) {
            if(user) {
                res.render('coffee_shop/register', {notification: 'This username has been used', success: ''})
            }else {
                const newUser = Users(req.body);
                newUser.save()
                    .then(() => res.render('coffee_shop/register', {notification: 'Register success, please back to the login page!', success: '1'}))
                    .catch(next)
            }
        })
    }

    //[GET] /login
    login(req, res, next) {
        res.render('coffee_shop/login')
    }

    postLogin(req, res, next) {
        Users.findOne({username: req.body.username}, function (err, user) {
            if(user == null) {
                res.render('coffee_shop/login', {notification: 'Wrong password or username!'})
            }else {
                if(user.password == req.body.password) {

                    req.session.isAuthenticated = true
                    req.session.authUser = user

                    res.redirect('/')
                }else {
                    res.render('coffee_shop/login', {notification: 'Wrong password or username!'})
                }
            }
        })
    }
}

module.exports = new UserController();