const express = require('express');
const router = express.Router();

const menuController = require('../app/controllers/MenuController')

router.get('/price-increase', menuController.pincrease)
router.get('/price-decrease', menuController.pdecrease)
router.get('/alphabet-increase', menuController.aincrease)
router.get('/alphabet-decrease', menuController.adecrease)
router.get('/search', menuController.search)
router.get('/', menuController.index)

module.exports = router

