'use strict'

const { Service, Testimoni, Testimoni } = require('../models')

class serviceController {
  static addPhoto(req, res, next) {
    const { image } = req.body
    Service
      .create({ image })
      .then(image => {
        res.status(201).json(image)
      })
      .catch(next)
  }

  static deletePhoto(req, res, next) {
    const id = req.params.id
    Service
      .findByIdAndDelete(id)
      .then(image => {
        res.status(200).json({
          message: 'Image Successfully to delete'
        })
      })
      .catch(next)
  }

  static findAllPhoto(req, res, next) {
    Service
      .find()
      .then(images => {
        res.status(200).json(images)
      })
      .catch(next)
  }

  static topPhoto(req, res, next) {
    Service
      .find().sort('-createdAt').limit(2)
      .then(images => {
        res.status(200).json(images)
      })
      .catch(next)
  }

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
      .find().sort('-createdAt').limit(6)
      .then(testimonies => {
        res.status(200).json(testimonies)
      })
      .catch(next)
  }

  static addPricelist(req, res, next) {
    const { pricelist } = req.body
    Pricelist
      .create({ pricelist })
      .then(pricelist => {
        res.status(201).json(pricelist)
      })
      .catch(next)
  }

  static deletePricelist(req, res, next) {
    const id = req.params.id
    Pricelist
      .findByIdAndDelete(id)
      .then(pricelist => {
        res.status(200).json({
          message: 'Pricelist Successfully to delete'
        })
      })
      .catch(next)
  }

  static findAllPricelist(req, res, next) {
    Pricelist
      .find()
      .then(pricelistes => {
        res.status(200).json(pricelistes)
      })
      .catch(next)
  }

  static topPricelist(req, res, next) {
    Pricelist
      .findOne().sort('-createdAt').limit(1)
      .then(pricelist => {
        res.status(200).json(pricelist)
      })
      .catch(next)
  }


}

module.exports = serviceController