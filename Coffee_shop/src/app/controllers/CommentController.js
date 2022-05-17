const Comments = require('../models/Comment')
const { multipleMongooseToObject } = require('../../util/mongoose')
const { MongooseToObject } = require('../../util/mongoose')

class CommentController {
    index(req, res, next) {
        Comments.find({})
            .then(comment => res.render('coffee_shop/comment', { 
                comment: multipleMongooseToObject(comment)
            }))
        
    }

    //[POST] /comment/store
    store(req, res, next) {
        const comment = new Comments(req.body);
        comment.save()
            .then(() => res.redirect('/comment'))
            .catch(next)
    }
}

module.exports = new CommentController();