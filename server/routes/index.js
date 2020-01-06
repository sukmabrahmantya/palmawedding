'use strict'

const express = require('express')
const router = express.Router()
const Admin = require('./admin')

router.use('/admin', Admin)

module.exports = router