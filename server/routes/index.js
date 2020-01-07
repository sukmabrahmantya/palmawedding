'use strict'

const express = require('express')
const router = express.Router()
const Admin = require('./admin')
const Photo = require('./photo')
const Testi = require('./testimony')
const Pricelist = require('./pricelist')
const Auth = require('../middlewares/authentication')

router.use('/admin', Admin)
router.use(Auth)
router.use('/images', Photo)
router.use('/testimony', Testi)
router.use('/pricelist', Pricelist)

module.exports = router