'use strict'

const { Schema, model } = require('mongoose')

const photoSchema = new Schema ({
  clientName: {
    type: String,
    required: [true, 'Client Name cannot be empty!']
  },
  date: {
    type: Date,
    required: [true, 'Date cannot be empty!']
  },
  image: {
    type: String,
    required: [true, 'Image cannot be empty!']
  }
})

const Photo = model('Photo', photoSchema)

module.exports = Photo