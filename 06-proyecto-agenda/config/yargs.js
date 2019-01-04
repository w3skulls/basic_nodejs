module.exports.argv = require('yargs')
    .command('list', 'Lista las tareas a realizar.', {
        description: { alias: 'd', demand: false, desc: 'Descripción de la tarea.' },
    })
    .command('create', 'Crea una nueva tarea.', {
        description: { alias: 'd', demand: true, desc: 'Crea una nueva tarea.' }
    })
    .command('update', 'Actualiza una tarea.', {
        description: { alias: 'd', demand: true, default: 'Tarea actualizada.', desc: 'Actualiza una tarea ya creada.' },
        complete: {alias: 'c', default: true, desc: 'Marca completa o incompleta la tarea.' }
    })
    .command('delete', 'Elimina una tarea.', {
        description: { alias: 'd', demand: false, default: 'Tarea eliminada.', desc: 'Elimina una tarea que ya existe.' }
    })
    .help()
    .argv;