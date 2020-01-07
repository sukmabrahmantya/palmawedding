'use strict'

const { Schema, model } = require('mongoose')

const pricelistSchema = new Schema({
  pricelist: String
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })

const Pricelist = model('Pricelist', pricelistSchema)

module.exports = Pricelist