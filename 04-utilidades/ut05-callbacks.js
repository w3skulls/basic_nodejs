console.log('--- CALLBACKS ---');
/**
* CALLBACKS 
*/
setTimeout( () => { console.log('La  función que recibe setTimeout(function, delay); es una función de callback'); }, 3500);


/**
* PRIMERA FUNCIÓN CALLBACK
* Las funciones callback funciones que son recibidas como parámetros dentro de una función;
* Se ejecutan dependiendo de si se dan o no distintas condiciones;
*/
let id_usuario = 'hola';	//no entra (valor debe ser numérico);
id_usuario = null;       	//no entra (valor debe ser != null);
id_usuario = -92;			//entra porque metemos el valor absoluto del id_usuario;



/**
* SEGUNDA FUNCIÓN CALLBACK
* La función recibe 2 parámetros:
* @param:  id (el id del usuario)
* @param:  callback (es una función que se ejecuta o no, dependiendo de si se cumplen o no las condiciones que necesitemos);
* @return: se devuelve la función de callback;
**/
let getUsuarioById = (id, callback) => {
	
	let usuario;
	
	if(id != null && !isNaN(id) && parseInt(id)){
		id = Math.abs(id);
		//suponemos que traemos este usuario de BBDD
		usuario = { id,  nombre: 'Pepe Rojas'};
		return callback(usuario);
	}

	return false;
}

let devolverDatosUsuario = usuario => {
	return `id usuario = ${ usuario.id }\nnombre usuario = ${ usuario.nombre }`;
}

let resultado = getUsuarioById( id_usuario , devolverDatosUsuario );
if (resultado) {
	console.log(resultado);
}else{
	console.log(`No se han encontrado resultados para el id de usuario: ${ id_usuario }`);
}


/**
* TERCERA FUNCIÓN CALLBACK
**/
let usuario = {
	nombre  : 'fernando',
	salario : 2000
}

let getSalario = (usuario, callback) => {
	if(usuario.hasOwnProperty('salario') && usuario.hasOwnProperty('nombre')){
		callback(usuario);
		return;
	}

	if(usuario.hasOwnProperty('nombre')){
		console.log('No se encontró un salario para el usuario ' + usuario['nombre'].toLocaleUpperCase());
		return;
	}

	console.log('Usuario no encontrado');
}


let mostrarResultados = usuario => {
	console.log('El salario de ' + usuario.nombre.toUpperCase() + ' es de ' + usuario.salario + '€. ');
}

getSalario(usuario, mostrarResultados);