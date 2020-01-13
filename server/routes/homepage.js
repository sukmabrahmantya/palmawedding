'use strict'

const express = require('express')
const router = express.Router()
const Homepage = require('../controllers/homepage')
const upload = require('../middlewares/gcsUpload')

router.post('/upload', upload.single('image'), (req, res) => {
  res.status(200).json(req.body)
})
router.post('/', Homepage.addPhoto)
router.delete('/:id', Homepage.deletePhoto)
router.get('/', Homepage.findAllPhoto)
router.get('/top', Homepage.topPhoto)

module.exports = router