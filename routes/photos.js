const express = require('express');
const PhotoHandler = require('../lib/photo_handler')
const router = express.Router();

/* GET list of photos. */
router.get('/', (req, res, next) => {
  const handler = new PhotoHandler()
  const pagination = handler.pagination(parseInt(req.query.page))

  res.render('photos', { title: 'All stereo photos', photos: handler.page(pagination.current), pagination });
});

/* GET photo page. */
router.get('/:slug', (req, res, next) => {
  const handler = new PhotoHandler()
  const photo = handler.find(req.params.slug)

  if (!photo) {
    const err = new Error('Cannot find photo')
    err.status = 404
    throw err
  }

  res.render('photo', { photo });
});

module.exports = router;
