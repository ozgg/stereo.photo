const express = require('express');
const path = require('path')
const fs = require('fs')
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../lib/photos.json'), 'utf8'))

  res.render('index', { title: 'Stereo.photo', photo: data[0] });
});

module.exports = router;
