'use strict'

const express = require('express')
const router = express.Router()
const Admin = require('../controllers/admin')
const Auth = require('../middlewares/authentication')
const Autho = require('../middlewares/authorization')

router.post('/login', Admin.login)
router.post('/register', Auth, Autho, Admin.register)

module.exports = router