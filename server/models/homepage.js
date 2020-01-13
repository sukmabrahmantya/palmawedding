'use strict'

const { Schema, model } = require('mongoose')

const homepageSchema = new Schema({
  image: {
    type: String,
    required: [true, 'Image cannot be empty!']
  }
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })

const Homepage = model('Homepage', homepageSchema)

module.exports = Homepage