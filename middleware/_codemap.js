module.exports = {
  _ns: 'motley',
  _folder: 'middleware',

  'buffet': require('./buffet'),
  'handlers[-60]': '#middleware.buffet',
  'buffet_instance': null
}