module.exports = {
  _ns: 'motley',

  'middleware.buffet': require('./buffet'),
  'middleware.closeBuffet': require('./closeBuffet'),
  'middleware[-60]': '#middleware.buffet',
  'middleware.buffet_instance': null
}