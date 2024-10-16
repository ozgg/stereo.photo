const path = require('path')
const fs = require('fs')
const Photo = require('./photo')

class PhotoHandler {
  constructor () {
    this.data = JSON.parse(fs.readFileSync(path.join(__dirname, 'photos.json'), 'utf8'))
    this.photos = new Map()
    this.initializePhotos()
  }

  find(slug) {
    return this.photos.get(slug)
  }

  first() {
    return this.photos.values().next().value
  }

  page(number) {
    const perPage = 10
    const from = (number - 1) * perPage
    const till = number * perPage

    return Array.from(this.photos.values()).slice(from, till)
  }

  initializePhotos() {
    for (let i = 0; i < this.data.length; i++) {
      const previous = i > 0 ? this.data[i - 1] : null
      const next = i < this.data.length - 1 ? this.data[i + 1] : null
      const slug = this.data[i]['file']
      this.photos.set(slug, new Photo(this.data[i], previous, next))
    }
  }
}

module.exports = PhotoHandler
