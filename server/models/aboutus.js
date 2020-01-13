'use strict'

const { Schema, model } = require('mongoose')

const aboutUsSchema = new Schema({
  image: {
    type: String,
    required: [true, 'Image cannot be empty!']
  }
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })

const About = model('About', aboutUsSchema)

module.exports = About