const confirmar = async (tareas, tarea) => {
  let confirmada = false

  let x = await tareas.map(item => {
    if (item.tarea === tarea) {
      item.completado = true
    } else {
      confirmada = true
    }
    return item
  })

  return {
    tareas: x,
    confirmada
  }
}

module.exports = confirmar
