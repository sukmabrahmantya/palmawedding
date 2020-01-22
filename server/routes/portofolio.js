'use strict'

const express = require('express')
const router = express.Router()
const Image = require('../controllers/portofolio')
const gcsUpload = require('gcs-upload')

const upload = gcsUpload({
  gcsConfig: {
    keyFilename: 'keyfile.json',
    bucketName: process.env.GOOGLE_CLOUD_BUCKET
  }
})

router.post('/', upload.single('image'), Image.addPhoto)
router.delete('/:id', Image.deletePhoto)
router.get('/', Image.findAllPhoto)
router.get('/top', Image.topPhoto)

module.exports = router