'use strict'
const { Admin } = require('../models')
const { generateToken, verifyToken } = require('../helpers/jwt')
const bcrypt = require('bcryptjs')

class adminController {
  static verivyToken(req, res, next) {
    const token = req.headers.token
    const {id} = verifyToken(token)

    Admin
      .findById(id)
      .then(admin => {
        res.status(200).json(admin)
      })
      .catch(next)
  }

  static login(req, res, next) {
    const { email, password } = req.body
    Admin.findOne({
      email
    })
      .then(user => {
        if (user) {
          let valid = bcrypt.compareSync(password, user.password)
          if (valid) {
            let token = generateToken({ id: user.id })
            res.status(200).json({
              token,
              username: user.username
            })
          } else {
            throw ({
              status: 400,
              message: 'Your email/password is wrong'
            })
          }
        } else {
          throw ({
            status: 400,
            message: 'Your email is not registered'
          })
        }
      })
      .catch(next)
  }

  static register(req, res, next) {
    const { name, email, password, username } = req.body
    Admin
      .create({ name, email, password, username, status: 'Admin' })
      .then(user => {
        // let token = generateToken({ id: user.id })
        res.status(201).json({
          message: `Successfully to add ${user.name} as Admin`
        })
      })
      .catch( next )
  }
}

module.exports = adminController

