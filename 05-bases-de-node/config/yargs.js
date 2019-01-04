const argv = require('yargs')
    .command('save', 'Guarda la tabla de multiplicar.', {
        base: { alias: 'b', demand: true, default: 1 },
        limit: { demand: true }
    })
    .command('show', 'Muestra la tabla de multiplicar.', {
        base: { alias: 'b', demand: true, default: 1}
    })
    .help()
    .argv;

module.exports = {
    argv: argv
}