'use strict'

const { Homepage } = require('../models')
const { Storage } = require('@google-cloud/storage')
const storage = new Storage()
const file = storage.bucket('image-palma')

class homepageController {
  static addPhoto(req, res, next) {
    const { image } = req.body
    Homepage
      .create({ image })
      .then(image => {
        res.status(201).json(image)
      })
      .catch(next)
  }

  static deletePhoto(req, res, next) {
    const id = req.params.id
    Homepage
      .findByIdAndDelete(id)
      .then(image => {
        res.status(200).json({
          message: 'Image Successfully to delete'
        })
      })
      .catch(next)
  }

  static findAllPhoto(req, res, next) {
    Homepage
      .find().sort('-createdAt')
      .then(images => {
        res.status(200).json(images)
      })
      .catch(next)
  }

  static topPhoto(req, res, next) {
    Homepage
      .find().sort('-createdAt').limit(3)
      .then(images => {
        res.status(200).json(images)
      })
      .catch(next)
  }

}

module.exports = homepageController