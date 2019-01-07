'use strict';

module.exports.argv = require('yargs')
    .command('create', 'Crea una nueva tarea', {
        description: { alias: 'd', demand: true }
    })
    .command('list', 'Lista TODAS las tareas', {})
    .command('update', 'Actualiza una tarea buscando por la descripción', {
        find: {alias: 'f', demand: true},
        hecho: { alias: 'h', demand: true }
    })
    .command('delete', 'Elimina una tarea.', {
        find: { alias: 'f', demand: true }
    })
    .help()
    .argv;
