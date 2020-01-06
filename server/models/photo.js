'use strict'

const { Schema, model } = require('mongoose')

const photoSchema = new Schema ({
  image: String
})

const Photo = model('Photo', photoSchema)

module.exports = Photo