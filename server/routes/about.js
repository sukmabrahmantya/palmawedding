'use strict'

const express = require('express')
const router = express.Router()
const About = require('../controllers/about')
const upload = require('../middlewares/gcsUpload')

router.post('/upload', upload.single('image'), (req, res) => {
  res.status(200).json(req.body)
})
router.post('/', About.addPhoto)
router.delete('/:id', About.deletePhoto)
router.get('/', About.findAllPhoto)
router.get('/top', About.topPhoto)

module.exports = router