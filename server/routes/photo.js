'use strict'

const express = require('express')
const router = express.Router()
const Image = require('../controllers/photo')

router.post('/', Image.addPhoto)
router.delete('/:id', Image.deletePhoto)
router.get('/', Image.findAllPhoto)
router.get('/top', Image.topPhoto)

module.exports = router