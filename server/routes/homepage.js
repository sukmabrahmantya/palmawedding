'use strict'

const express = require('express')
const router = express.Router()
const Homepage = require('../controllers/homepage')
const gcsUpload = require('gcs-upload')

const upload = gcsUpload({
  gcsConfig: {
    keyFilename: 'keyfile.json',
    bucketName: process.env.GOOGLE_CLOUD_BUCKET
  }
})

router.post('/', upload.single('image'), Homepage.addPhoto)
router.delete('/:id', Homepage.deletePhoto)
router.get('/', Homepage.findAllPhoto)
router.get('/top', Homepage.topPhoto)

module.exports = router