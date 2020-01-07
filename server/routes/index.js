'use strict'

const express = require('express')
const router = express.Router()
const Admin = require('./admin')
const Photo = require('./photo')
const Testi = require('./testimony')
const Auth = require('../middlewares/authentication')

router.use('/admin', Admin)
router.use(Auth)
router.use('/images', Photo)
router.use('/testimony', Testi)

module.exports = router