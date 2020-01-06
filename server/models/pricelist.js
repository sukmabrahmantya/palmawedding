'use strict'

const { Schema, model } = require('mongoose')

const pricelistSchema = new Schema({
  pricelist: String
})

const Pricelist = model('Pricelist', pricelistSchema)

module.exports = Pricelist