'use strict'

const { Schema, model } = require('mongoose')

const photoSchema = new Schema ({
  title: {
    type: String,
    required: [true, 'Title cannot be empty!']
  },
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
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }})

const Photo = model('Photo', photoSchema)

module.exports = Photo