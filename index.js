const pull = require('pull-stream')
const pullMany = require('pull-many')

module.exports = inuMulti

function inuMulti (app) {
  return {
    init: app.init,
    update: app.update,
    view: app.view,
    run: function runMulti (effect, sources) {
      if (Array.isArray(effect)) {
        return pullMany(effect.map((eff) => {
          return app.run(eff, sources) || pull.empty()
        }))
      }
      return app.run(effect, sources)
    }
  }
}
