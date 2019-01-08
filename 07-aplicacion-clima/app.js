'use strict';

const {getInfo} = require('./app/functions');
const colors = require('colors');

const argv = require('yargs')
    .options({
        direction: {
            desc: "Recoge la dirección de la localización para obtener el clima.",
            alias: 'd',
            demand: true
        }
    })
    .help()
    .argv;

/**
* Recoge: lng, lat y dirección;
*/
let direccion = argv.direction;

getInfo(direccion)
    .then(result => {
        console.log(colors.green(result));
    } )
    .catch(err => console.log( colors.red('Ha ocurrido un error en el getWeather') ));


  
