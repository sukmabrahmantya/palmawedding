'use strict'

const express = require('express')
const router = express.Router()
const Content = require('../controllers/content')

router.post('/', Content.addPhoto)
router.delete('/:id', Content.deletePhoto)
router.get('/', Content.findAllPhoto)
router.get('/top', Content.topPhoto)

module.exports = router