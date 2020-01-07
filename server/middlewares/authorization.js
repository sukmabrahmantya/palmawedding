'use strict'

const { Admin } = require('../models')

module.exports = (req, res, next) => {
  Admin.findOne({
    _id: req.decoded.id
  })
    .then(user => {
      if (user) {
        if (user.status == 'Super Admin') {
          next()
        } else {
          throw ({
            status: 401,
            message: 'You dont have authorization to do action'
          })
        }
      } else {
        throw ({
          status: 401,
          message: 'You dont have authorization to do action'
        })
      }
    })
    .catch(next)
}