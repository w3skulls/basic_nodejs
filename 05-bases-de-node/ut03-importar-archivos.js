'use strict';

//destructuración
const {crearArchivo} = require('./includes/multiplicar.js');

console.log(crearArchivo);
let fs = require('fs');
let base = '08';

console.log(process);

crearArchivo(base)
    .then( (retorno) => { console.log(`Archivo creado ${retorno}`); })
    .catch(err => { console.log('ERROR =>', err); });