'use strict'

const { Pricelist } = require('../models')

class pricelistController {
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

module.exports = pricelistController