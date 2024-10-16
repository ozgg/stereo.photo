const express = require('express');
const PhotoHandler = require('../lib/photo_handler')
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const handler = new PhotoHandler()
  const pageFromQuery = parseInt(req.query.page)
  const parsedPage = !pageFromQuery ? 1 : pageFromQuery
  const page = parsedPage < 1 ? 1 : parsedPage

  res.render('photos', { title: 'All stereo photos', photos: handler.page(page), page: page });
});

module.exports = router;
