const colors = require('colors')

/**
 * @description Listar todas las tareas guardas en base de datos
 * @param {array} tareas
 * @param {string} tarea
 * @param {boolean} completada
 * @param {boolean} pendiente
 */
const listar = (tareas, tarea = '', completada, pendiente) => {
  if (tarea) {
    let tareaEnTareas = tareas.filter(x => x.tarea === tarea)
    if (tareaEnTareas < 1) {
      console.log(`No se encontro la tarea "${tarea}"`)
    }
  }

  if (tarea === '' && ((!completada && pendiente) || (completada && !pendiente))) {
    tareas = completada ? tareas.filter(x => x.completado) : tareas
    tareas = pendiente ? tareas.filter(x => !x.completado) : tareas
  }

  if (tarea !== '') {
    tareas.forEach(item => {
      if (item.tarea === tarea) {
        console.log('=========Tareas por hacer============'.blue)
        console.log('Nombre de la tarea: '.white, item.tarea)
        console.log('Completada: '.white, item.completado)
        console.log('====================================='.blue)
      }
    })
  } else {
    for (let tarea of tareas) {
      console.log(tarea.completado
        ? `=========Tareas por hacer============`.green
        : `=========Tareas por hacer============`.red
      )
      console.log('Nombre de la tarea: '.blue, tarea.tarea)
      console.log('Completada: '.blue,
        tarea.completado
          ? `${tarea.completado}`.green
          : `${tarea.completado}`.red)
      console.log(tarea.completado
        ? `=====================================`.green
        : `=====================================`.red
      )
    }
  }
}

module.exports = listar
