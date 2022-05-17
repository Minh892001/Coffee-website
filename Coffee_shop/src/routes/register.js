const express = require('express');
const router = express.Router();

const UserController = require('../app/controllers/UserController')

router.post('/store', UserController.store)
router.get('/', UserController.index)

module.exports = router
