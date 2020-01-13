'use strict'

const { About } = require('../models')

class aboutController {
  static addPhoto(req, res, next) {
    const { image } = req.body
    About
      .create({ image })
      .then(image => {
        res.status(201).json(image)
      })
      .catch(next)
  }

  static deletePhoto(req, res, next) {
    const id = req.params.id
    About
      .findByIdAndDelete(id)
      .then(image => {
        res.status(200).json({
          message: 'Image Successfully to delete'
        })
      })
      .catch(next)
  }

  static findAllPhoto(req, res, next) {
    About
      .find()
      .then(images => {
        res.status(200).json(images)
      })
      .catch(next)
  }

  static topPhoto(req, res, next) {
    About
      .find().sort('-createdAt').limit(3)
      .then(images => {
        res.status(200).json(images)
      })
      .catch(next)
  }

}

module.exports = aboutController