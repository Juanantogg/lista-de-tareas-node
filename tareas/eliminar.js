const eliminar = async (tareas, tarea) => {
  let eliminada = false

  let x = await tareas.filter(item => {
    if (item.tarea !== tarea) {
      return item
    } else {
      eliminada = true
    }
  })

  return {
    tareas: x,
    eliminada
  }
}

module.exports = eliminar
