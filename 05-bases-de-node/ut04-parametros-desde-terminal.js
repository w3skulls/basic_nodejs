'use strict';
let {getFilm} = require('./includes/films');
let idPelicula = 1;

let argv = process.argv;
console.log(argv);

let array = argv[2].split('=');

console.log('\n');

getFilm(array[1])
    .then(film => console.log(film))
    .catch(err => console.log(err) );



