module.exports = function container (get, set) {
  return function closeBuffet (cb) {
    var buffet_instance = get('middleware.buffet_instance')
    if (buffet_instance) {
      get('vendor.console').log('motley-buffet: closing buffet...')
      buffet_instance.close()
      get('vendor.console').log('motley-buffet: closed buffet.')
      setImmediate(cb)
    }
    else setImmediate(cb)
  }
}