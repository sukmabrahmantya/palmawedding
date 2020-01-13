'use strict'

const { Schema, model } = require('mongoose')

const serviceSchema = new Schema({
  image: {
    type: String,
    required: [true, 'Image cannot be empty!']
  }
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })

const Service = model('Service', serviceSchema)

module.exports = Service