module.exports = function container (get, set) {
  var Buffet = get('vendor.buffet').Buffet
  var specs = get('conf.middleware.buffet.specs')
  var options = get('conf.middleware.buffet')
  if (specs.length) {
    var buffet = new Buffet(specs, options)
    set('@middleware.buffet_instance', buffet)
    return buffet.middleware(options)
  }

  return function (req, res, next) { next() }
}