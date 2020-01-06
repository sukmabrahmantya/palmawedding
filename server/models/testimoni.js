'use strict'

const { Schema, model } = require('mongoose')

const testimoniSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Client Name cannot be empty!']
  },
  date: {
    name: {
      type: Date,
      required: [true, 'Wedding Date cannot be empty!']
    },
  },
  testimoni: {
    name: {
      type: String,
      required: [true, 'Testimony cannot be empty!']
    },
  }
})

const Testimoni = model('Testimoni', testimoniSchema)

module.exports = Testimoni