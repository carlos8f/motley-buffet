module.exports = {
  _ns: 'motley',
  _folder: 'conf',

  'middleware.buffet.specs[]': '#conf.middleware.buffet.root',
  'middleware.buffet.root': {
    globs: 'public/**/*',
    cwd: process.cwd()
  },
  'middleware.buffet': {
    indexes: true,
    index: 'index.html',
    watch: true,
    notFoundPath: '/404.html',
    defaultContentType: 'application/octet-stream'
  }
}