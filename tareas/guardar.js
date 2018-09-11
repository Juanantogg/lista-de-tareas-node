const fs = require('fs')

const guardar = (tareas, tarea = '') => {
  let existe = false

  if (tarea) {
    tareas.forEach(x => {
      if (x.tarea === tarea) {
        console.log(`La tarea "${tarea}" ya existe`)
        existe = true
      }
    })
  }

  if (tarea && !existe) {
    tareas.push({
      tarea,
      completado: false
    })
  }

  if (!existe) {
    fs.writeFile('./tareas/db/tareas.json', JSON.stringify(tareas), 'utf-8', (err) => {
      if (err) {
        console.log(err)
      } else {
        if (tarea) {
          console.log(`La tarea "${tarea}" se guardo con exito`)
        }
      }
    })
  }
}

module.exports = guardar
