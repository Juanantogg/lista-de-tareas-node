# Lista de tareas con Node.js

Ejemplo para el paso de parámetros por consola

### Uso

Clonar este repositorio

- npm install
ó
- yarn

### Comando

- crear
  - --tarea (-t)
- listar
  - --tarea (-t) - opcional (default todas las tareas)
  - --completadas (-c) - opcional
  - --pendientes (-p) - opcional
- confirmar
  - --tarea (-t)
- eliminar
  - --tarea (-t)

### Ejemplos

`node app.js crear -t nueva-tarea`

`node app.js listar`

`node app.js listar -t una-tarea-a-lista`

`node app.js listar -c`

`node app.js listar -p`

`node app.js confirma -t tarea-a-confirmar`

`node app.js eliminar -t tarea-a-eliminar`
