const express = require('express');
const PhotoHandler = require('../lib/photo_handler')
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const handler = new PhotoHandler()

  res.render('photos', { title: 'All stereo photos', photos: handler.page(1) });
});

module.exports = router;
