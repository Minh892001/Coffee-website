const express = require('express');
const router = express.Router();

const billController = require('../app/controllers/BillController')

router.post('/store', billController.store)
router.get('/', billController.index)

module.exports = router
