'use strict';
/**
 * YARGS : analiza los argumentos de línea de comandos
 */
const { generarTabla, mostrarTabla } = require('./includes/funcionesTabla');
const { argv } = require('./config/yargs');
const colors = require('colors');

let comando = argv._[0];
let base = argv.base;
let limit = argv.limit;

switch (comando){
    case 'save': 
        generarTabla(base, limit)
            .then(resultado => console.log(`Archivo ${resultado} creado.`.green) )
            .catch(err => console.log(err) );   
        break;
    case 'show': mostrarTabla(base); break;
    default: 
        console.log(`El comando ${comando} no se reconoce.`);
        break;
};