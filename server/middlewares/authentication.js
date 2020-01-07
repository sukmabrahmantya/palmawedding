'use strict'

const { verifyToken } = require('../helpers/jwt')

module.exports = (req, res, next) => {
  try {
    let token = req.headers.token
    const payload = verifyToken(token)
    req.decoded = payload
    console.log(req.decoded)
    next()
  } catch (next) {
    next(err)
  }
}
