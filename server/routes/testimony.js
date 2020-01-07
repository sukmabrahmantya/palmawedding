'use strict'

const express = require('express')
const router = express.Router()
const Testimoni = require('../controllers/testimoni')

router.post('/', Testimoni.addTestimoni)
router.delete('/:id', Testimoni.deleteTestimoni)
router.get('/', Testimoni.findAllTestimoni)
router.get('/top', Testimoni.topTestimoni)

module.exports = router