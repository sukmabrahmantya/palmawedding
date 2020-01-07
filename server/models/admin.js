'use strict'

const { Schema, model, models } = require('mongoose')
const bcrypt = require('bcryptjs')

const adminSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name cannot be empty!']
  },
  username: {
    type: String,
    required: [true, 'Username cannot be empty!']
  },
  email: {
    type: String,
    required: [true, `Email cannot be empty!`],
    validate: [{
      validator: (value) => {
        return models.Admin.findOne({ email: value })
          .then(user => {
            if (user) return false
          })
      },
      msg: `Email already taken!`
    }, {
      validator: (value) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
      },
      msg: `Email is not valid!`
    }]
  },
  password: {
    type: String,
    required: [true, 'Password cannot be empty!']
  },
  status: {
    type: String
  }
})

adminSchema.pre('save', function (next) {
  const salt = bcrypt.genSaltSync(11)
  this.password = bcrypt.hashSync(this.password, salt)
  next()
})

const Admin = model('Admin', adminSchema)

module.exports = Admin