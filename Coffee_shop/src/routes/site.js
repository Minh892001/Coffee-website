const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController')

router.get('/123', siteController.index2)
router.get('/', siteController.index1)

module.exports = router

