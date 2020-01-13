'use strict'

const express = require('express')
const router = express.Router()
const Image = require('../controllers/portofolio')
const upload = require('../middlewares/gcsUpload')

router.post('/upload', upload.single('image'), (req, res) => {
  res.status(200).json(req.body)
})
router.post('/', Image.addPhoto)
router.delete('/:id', Image.deletePhoto)
router.get('/', Image.findAllPhoto)
router.get('/top', Image.topPhoto)

module.exports = router