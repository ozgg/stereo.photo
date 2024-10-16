class Photo {
  constructor (data, previous, next) {
    this.slug = data['file']
    this.titles = data['title']
    this.alts = data['alt']
    this.prev = previous ? previous['file'] : null
    this.next = next ? next['file'] : null
  }

  get file() {
    return this.slug
  }

  get title() {
    return this.titles['en']
  }

  get alt() {
    return this.alts['en']
  }
}

module.exports = Photo
