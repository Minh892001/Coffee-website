const express = require('express');
const router = express.Router();
const cartController = require('../app/controllers/CartController')

router.get('/', cartController.index)
router.delete('/:id', cartController.delete)
router.get('/store/:id', cartController.store)
router.post('/store3/:id', cartController.store2)

module.exports = router
