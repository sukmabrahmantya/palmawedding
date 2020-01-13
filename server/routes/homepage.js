'use strict'

const express = require('express')
const router = express.Router()
const Homepage = require('../controllers/homepage')

router.post('/', Homepage.addPhoto)
router.delete('/:id', Homepage.deletePhoto)
router.get('/', Homepage.findAllPhoto)
router.get('/top', Homepage.topPhoto)

module.exports = router