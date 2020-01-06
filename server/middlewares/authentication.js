'use strict'

const { verifyToken } = require('../helpers/jwt')
const { Admin } = require('../models')

module.exports = (req, res, next) => {
  let token = req.headers.token
  try {
    const decoded = verifyToken(token)
    Admin
      .findById(decoded.id)
      .then(admin => {
        if (admin) {
          req.decoded = admin
          next()
        }
      })
      .catch(err => { next(err) })
  } catch (err) {
    next(err)
  }
}