'use strict'

const { Photo } = require('../models')

class photoController {
  static addPhoto(req, res, next) {
    const { title, image, clientName, date } = req.body
    Photo
      .create({ title, image, clientName, date: new Date(date) })
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
        res.status(200).json(images)
      })
      .catch(next)
  }

  static topPhoto(req, res, next) {
    Photo
      .find().sort('-createdAt').limit(3)
      .then(images => {
        res.status(200).json(images)
      })
      .catch(next)
  }

}

module.exports = photoController