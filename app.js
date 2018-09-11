const argv = require('./config')
const guardar = require('./tareas/guardar')
const listar = require('./tareas/listar')
const eliminar = require('./tareas/eliminar')
const confirmar = require('./tareas/confirmar')
const { tareas } = require('./tareas/leerdb')

switch (argv._[0]) {
  case 'crear':
    guardar(tareas, argv.tarea)
    break

  case 'confirmar':
    confirmar(tareas, argv.tarea)
      .then(res => {
        if (res.confirmada) {
          guardar(res.tareas)
          console.log(`La tarea ${argv.tarea} fue confirmada con exito`)
        } else {
          console.log(`La tarea "${argv.tarea}" no exite`)
        }
      })
    break

  case 'listar':
    listar(tareas, argv.tarea, argv.completada, argv.pendiente)
    break

  case 'eliminar':
    eliminar(tareas, argv.tarea)
      .then(res => {
        if (res.eliminada) {
          guardar(res.tareas)
          console.log(`La tarea "${argv.tarea}" se ha eliminado con exito`)
        } else {
          console.log(`La tarea "${argv.tarea}" no existe`)
        }
      })
    break

  default:
    console.log(`El comando "${argv._[0]}" no esta definido.`)
    break
}
