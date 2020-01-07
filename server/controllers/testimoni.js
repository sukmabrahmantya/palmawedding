'use strict'

const { Testimoni } = require('../models')

class testimoniController {
  static addTestimoni(req, res, next) {
    const { name, date, testimony } = req.body
    Testimoni
      .create({ name, date: new Date(date), testimony })
      .then(testimoni => {
        res.status(201).json(testimoni)
      })
      .catch(next)
  }

  static deleteTestimoni(req, res, next) {
    const id = req.params.id
    Testimoni
      .findByIdAndDelete(id)
      .then(testimoni => {
        res.status(200).json({
          message: 'Testimony Successfully to delete'
        })
      })
      .catch(next)
  }

  static findAllTestimoni(req, res, next) {
    Testimoni
      .find()
      .then(testimonies => {
        res.status(200).json(testimonies)
      })
      .catch(next)
  }

  static topTestimoni(req, res, next) {
    Testimoni
      .find().sort('-createdAt').limit(5)
      .then(testimonies => {
        res.status(200).json(testimonies)
      })
      .catch(next)
  }

}

module.exports = testimoniController