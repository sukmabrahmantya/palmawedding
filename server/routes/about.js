'use strict'

const express = require('express')
const router = express.Router()
const About = require('../controllers/about')

router.post('/', About.addPhoto)
router.delete('/:id', About.deletePhoto)
router.get('/', About.findAllPhoto)
router.get('/top', About.topPhoto)

module.exports = router