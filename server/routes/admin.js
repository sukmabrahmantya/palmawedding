'use strict'

const express = require('express')
const router = express.Router()
const Admin = require('../controllers/admin')
const Auth = require('../middlewares/authentication')

router.post('/login', Admin.login)
router.post('/register', Auth, Admin.register)

module.exports = router