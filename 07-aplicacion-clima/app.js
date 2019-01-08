'use strict';

const {getWeather} = require('./app/functions');
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
getWeather(argv);


  
