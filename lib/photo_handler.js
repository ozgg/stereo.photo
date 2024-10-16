const path = require('path')
const fs = require('fs')
const Photo = require('./photo')

class PhotoHandler {
  PER_PAGE = 5

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
    const from = (number - 1) * this.PER_PAGE
    const till = number * this.PER_PAGE

    return Array.from(this.photos.values()).slice(from, till)
  }

  pagination(currentPage) {
    const parsedPage = !currentPage ? 1 : currentPage
    const page = parsedPage < 1 ? 1 : parsedPage
    const last = Math.ceil(this.photos.size / this.PER_PAGE)
    const current = page > last ? last : page
    return {
      first: 1,
      prev: current > 1 ? current - 1 : null,
      current,
      next: current < last ? current + 1: null,
      last
    }
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
