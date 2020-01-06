'use strict'

const { Schema, model } = require('mongoose')

const testimoniSchema = new Schema({
})

const Testimoni = model('Testimoni', testimoniSchema)

module.exports = Testimoni