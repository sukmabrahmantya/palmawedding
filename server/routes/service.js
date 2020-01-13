'use strict'

const express = require('express')
const router = express.Router()
const Service = require('../controllers/service')

router.post('/', Service.addPhoto)
router.delete('/:id', Service.deletePhoto)
router.get('/', Service.findAllPhoto)
router.get('/top', Service.topPhoto)

router.post('testimoni/', Service.addTestimoni)
router.delete('testimoni/:id', Service.deleteTestimoni)
router.get('testimoni/', Service.findAllTestimoni)
router.get('testimoni/top', Service.topTestimoni)

router.post('pricelist/', Service.addPricelist)
router.delete('pricelist/:id', Service.deletePricelist)
router.get('pricelist/', Service.findAllPricelist)
router.get('pricelist/top', Service.topPricelist)

module.exports = router