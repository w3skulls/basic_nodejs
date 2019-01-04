'use strict';

/**
* ASYNC & AWAIT
* Parte de ECMA7
* 
*/


//Con pone la palabra async, estamos creando una nueva Promise;
let getNombreAsync = async() => { 
	//undefined.nombre; //entra en el catch directamente;

	//Podemos disparar errores
	throw new Error('Ha ocurrido un error');
	return 'Fernando'; 
}

//Es lo mismo que si hacemos
let getNombrePromsise = (name) =>{
	return new Promise( (resolve, reject) => {
		resolve(`-------------------\nMi nombre es ${name}\n-------------------`);
	} );
}


getNombreAsync()
	.then( name => { console.log(name);})
	.catch( err => { console.log('Error async', err); })
/*getNombrePromsise('Héctor')
	.then( name => { console.log(name); });*/
