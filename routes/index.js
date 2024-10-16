const express = require('express');
const router = express.Router();
const PhotoHandler = require('../lib/photo_handler')

/* GET home page. */
router.get('/', (req, res, next) => {
  const handler = new PhotoHandler()

  res.render('index', { title: 'Stereo.photo', photo: handler.first() });
});

module.exports = router;
