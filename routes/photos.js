const express = require('express');
const PhotoHandler = require('../lib/photo_handler')
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const handler = new PhotoHandler()
  const pagination = handler.pagination(parseInt(req.query.page))

  res.render('photos', { title: 'All stereo photos', photos: handler.page(pagination.current), pagination: pagination });
});

module.exports = router;
