'use strict'

const express = require('express')
const router = express.Router()
const Admin = require('./admin')
const About = require('./about')
const Homepage = require('./homepage')
const Portofolio = require('./portofolio')
const Service = require('./service')
const Auth = require('../middlewares/authentication')

router.use('/admin', Admin)
router.use(Auth)
router.use('/homepage', Homepage)
router.use('/about', About)
router.use('/portofolio', Portofolio)
router.use('/service', Service)

module.exports = router