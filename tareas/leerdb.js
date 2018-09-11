try {
  module.exports.tareas = require('./db/tareas.json')
} catch (error) {
  module.exports.tareas = []
}
