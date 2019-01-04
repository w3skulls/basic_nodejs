/**
* NUEVAS FUNCIONALIDADES FLECHA
* Simulamos una base de datos con 2 tablas: empleados y salarios.
**/

let empleados = [{
	id: 1,
	nombre: 'Fernando'
}, {
	id: 2,
	nombre: 'Melissa'
}, {
	id: 3,
	nombre: 'Juan'
}];

let salarios = [{
	id: 1,
	salario: 1000
}, {
	id: 2,
	salario: 2000
}];

/**
* RECOGEMOS EL USUARIO DE LA "BASE DE DATOS" EMPLEADOS
* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find
**/
let getEmpleado = (id, callback) => {
	let empleadoDB = empleados.find(empleado => empleado.id === id);
	if (!empleadoDB) {
		callback(`No existe un empleado con el ID ${ id }`)
	}else{
		callback(null, empleadoDB);
	}
}

let getSalario = (empleado, callback) => {
	let salarioDB = salarios.find( salario => salario.id === empleado.id );
	if(!salarioDB){
		callback(`No se encontró un salario para el usuario ${ empleado.nombre }`);
	}else{
		console.log(empleado.nombre + ' ' + salarioDB.salario);
		callback(null, {
			nombre: empleado.nombre,
			salario: salarioDB.salario,
			id: empleado.id
		});
	}
}

getEmpleado(1, (err, empleado) => {
	if (err) {
		console.log('--- error 1 ---');
		return console.log(err);
	}

	getSalario(empleado, (err, resp) => {
		if (err) {
			console.log('--- error 2 ---');
			return console.log(err);
		}
		console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }$`);
	});

});