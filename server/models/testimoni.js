'use strict'

const { Schema, model } = require('mongoose')

const testimoniSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Client Name cannot be empty!']
  },
  date: {
    type: Date,
    required: [true, 'Wedding Date cannot be empty!']
  },
  testimony: {
    type: String,
    required: [true, 'Testimony cannot be empty!']
  },
}, { timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'} })

const Testimoni = model('Testimoni', testimoniSchema)

module.exports = Testimoni