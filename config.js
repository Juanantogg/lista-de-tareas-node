const yargs = require('yargs')

const tarea = {
  alias: 't',
  demand: true
}

yargs
  .command('crear', 'Agrega una nueva tarea por hacer', {
    tarea
  })
  .command('confirmar', 'Confirma una tarea', {
    tarea
  })
  .command('listar', 'Listar las tareas por hacer', {
    tarea: {
      alias: 't'
    },
    completada: {
      alias: 'c',
      default: false
    },
    pendiente: {
      alias: 'p',
      default: false
    }
  })
  .command('eliminar', 'Eliminar alguna tarea', {
    tarea
  })
  .help()

module.exports = yargs.argv
