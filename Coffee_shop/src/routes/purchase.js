const express = require('express');
const router = express.Router();

const PurchaseController = require('../app/controllers/PurchaseController')

router.get('/', PurchaseController.index)

module.exports = router
