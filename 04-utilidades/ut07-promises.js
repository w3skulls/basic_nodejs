/**
* PROMESAS
* Permiten ejecutar trabajos síncronos o asíncronos después de que se realice una tarea.
* Las promesas contienen 2 callbacks: resolve y reject.
* RESOLVE :: Se llama si la promesa es exitosa (Sólo permite un parámetro, si queremos devolver más tenemos que devolver un objeto {...})
* REJECT  :: Se llama si la promesa no ha obtenido resultado.
* Usamos la promesa con un ".then".
**/

/**
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

let result = {};

let getEmpleado = ( id ) => {
	return new Promise( (resolve, reject) => {
		let empleadoDB = empleados.find((empleado) => { return empleado.id === id});
		if (!empleadoDB) {
			reject('No hay empleado con el id = ' + id);
		}else{
			resolve(empleadoDB);
		}
	} )
};

let _getSalario = (emp) => {
	return new Promise( (resolve, reject) => {
		let salarioDB = salarios.find((salario) => { return salario.id === emp.id});
		if (!salarioDB) {
			reject(`No hay salario con el id = ${emp.id}`);
		}else{
			resolve(
				{
					id: emp.id,
					nombre: emp.nombre,
					salario: salarioDB.salario + '€'
				});
		}
	});
} 



getEmpleado(1, result).then( 
	(empleado) => {
		console.log('-- EMPLEADO ENCONTRADO --');
		//console.log(empleado);
		_getSalario(empleado).then(
			(res)=>{
				console.log(`id: ${res.id}`);
				console.log(`Empleado: ${res.nombre}`);
				console.log(`Salario: ${res.salario}`);
				console.log('--------------------------');
			},
			(err)=>{ 
				console.log(err);
			});
	}, (err) => {
		console.log(err);
	}
	);


