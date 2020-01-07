'use strict'

const { Photo, Testimoni, Pricelist } = require('../models')

class contentController {
  static addPhoto(req, res, next) {
    const { image, clientName, date } = req.body
    Photo
      .create({ image, clientName, date: new Date(date) })
      .then(image => {
        res.status(201).json(image)
      })
      .catch(next)
  }

  static deletePhoto(req, res, next) {
    const id = req.params.id
    Photo
      .findByIdAndDelete(id)
      .then(image => {
        res.status(200).json({
          message: 'Image Successfully to delete'
        })
      })
      .catch(next)
  }

  static findAllPhoto(req, res, next) {
    Photo
      .find()
      .then(images => {
        res.status(200).json(image)
      })
      .catch(next)
  }

  static topPhoto(req, res, next) {
    Photo
      .find({ $limit: 3 })
      .then(images => {
        res.status(200).json(images)
      })
      .catch(next)
  }

  static addTesti(req, res, next) {

  }

  static deleteTesti(req, res, next) {

  }

  static findAllTesti(req, res, next) {

  }

  static topTesti(req, res, next) {

  }

  static addPricelist(req, res, next) {

  }

  static deletePricelist(req, res, next) {

  }

  static findAllPricelist(req, res, next) {

  }

}

module.exports = contentController