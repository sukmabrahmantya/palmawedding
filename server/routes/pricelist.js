'use strict'

const express = require('express')
const router = express.Router()
const Pricelist = require('../controllers/pricelist')

router.post('/', Pricelist.addPricelist)
router.delete('/:id', Pricelist.deletePricelist)
router.get('/', Pricelist.findAllPricelist)
router.get('/top', Pricelist.topPricelist)

module.exports = router