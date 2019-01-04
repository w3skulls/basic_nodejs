'use strict';

let FILMS = [{
    id: 1,
    title: 'EL bueno, el feo y el malo',
    director: 'Sergio Leone',
    bso: 'Ennio Morricone'
},
{
    id: 2,
    title: 'Por un puñado de dólares',
    director: 'Sergio Leone',
    bso: 'Ennio Morricone'
}];


let getFilm = (id) => {
    let filmDB = FILMS.find( (film) => { return film.id == id; });
    return new Promise((resolve, reject)=>{
        
        if(!filmDB){
            reject(`No hay registros para el id=${id}`);
        }
        resolve(filmDB);
    });
};

module.exports = {
    getFilm: getFilm
}