'use strict';

let getNombre = () => {
	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			resolve ('Karibe');
		}, 3000 );
	} );
};

/**
* Queremos saludar al nombre que nos devuelve la promesa, por lo que 
* esta función debe ser asíncrona.
* La única condición para poder usar el AWAIT, es que la función debe ser ASYNC;	
* JS no va a contnuar la ejecución hasta que no obtenga respuesta.
* Hay que tener cuidado porque si no recibe respuesta, puede quedarse pillado;
*/
let saludar = async ()=>{
	let nombre = await getNombre();
	return `Hola ${nombre}`;
}

saludar()
	.then( (params) => { console.log(params); })
	.catch( err => { console.log('ERROR' , err);});

console.log('Función saludar:', saludar('Pepe'));