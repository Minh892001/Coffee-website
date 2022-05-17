const express = require('express');
const router = express.Router();

const UserController = require('../app/controllers/UserController')

router.post('/store', UserController.postLogin)
router.get('/', UserController.login)

module.exports = router
