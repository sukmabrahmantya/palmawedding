'use strict'

const express = require('express')
const router = express.Router()
const About = require('../controllers/about')
const gcsUpload = require('gcs-upload')

const upload = gcsUpload({
  gcsConfig: {
    keyFilename: 'keyfile.json',
    bucketName: process.env.GOOGLE_CLOUD_BUCKET
  }
})

router.post('/', upload.single('image'), About.addPhoto)
router.delete('/:id', About.deletePhoto)
router.get('/', About.findAllPhoto)
router.get('/top', About.topPhoto)

module.exports = router