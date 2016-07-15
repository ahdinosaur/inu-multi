const extend = require('xtend')
const empty = require('pull-stream/sources/empty')
const many = require('pull-many')

module.exports = inuMulti

function inuMulti (app) {
  if (!app.run) return app

  return extend(app, {
    run: function runMulti (effect, sources) {
      if (Array.isArray(effect)) {
        return many(effect.map((eff) => {
          return app.run(eff, sources) || empty()
        }))
      }
      return app.run(effect, sources)
    }
  })
}
