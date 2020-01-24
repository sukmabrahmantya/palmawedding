'use strict'

const express = require('express')
const router = express.Router()
const Admin = require('../controllers/admin')
const Auth = require('../middlewares/authentication')
const Autho = require('../middlewares/authorization')

router.post('/login', Admin.login)
router.get('/verify', Admin.verivyToken)
router.get('/all', Auth, Autho, Admin.fetchAll)
router.post('/register', Auth, Autho, Admin.register)
router.delete('/register/:id', Auth, Autho, Admin.delete)


module.exports = router