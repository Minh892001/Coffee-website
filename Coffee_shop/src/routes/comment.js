const express = require('express');
const router = express.Router();

const commentController = require('../app/controllers/CommentController')

router.post('/store', commentController.store)
router.get('/', commentController.index)

module.exports = router
