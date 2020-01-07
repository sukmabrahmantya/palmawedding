'use strict'

const express = require('express')
const router = express.Router()
const Admin = require('./admin')
const Photo = require('./photo')
const Auth = require('../middlewares/authentication')

router.use('/admin', Admin)
router.use(Auth)
router.use('/images', Photo)

module.exports = router