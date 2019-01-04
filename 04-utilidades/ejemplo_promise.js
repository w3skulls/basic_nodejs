let consulta = {
	'id' : 1,
	'nombre' : 'Pepe',
	'apellidos': 'Pochorro Bonito',
	'alias': 'Karibe'
};


//Para obtener el ERROR en RESOLVE;
//consulta = {};


//Las promesas :: ejecutan trabajos después de que se realice una tarea;

function getConsulta(data){
	//Se realiza la tarea
	let longitud = Object.getOwnPropertyNames(data).length;

	//Se ejecuta un trabajo cuando se ejecuta la tarea;
	return new Promise( (resolve, reject) => {
		if(longitud){
			resolve(data);
		}else{
			reject({'longitud': longitud, 'data': data});
		}
	});
}


//ejecuto la función en el REJECT;
function controlarError(e){
	console.log('error => ');
	e.data['error'] = 'Ha ocurrido un error';
	console.log(e);
};


//Uso el .then para ejecutar la tarea secundaria;
getConsulta(consulta).then(
	(consulta)=>{
		console.log('RESOLVE');
		console.log(consulta);
	}, 
	err=>{
		console.log('REJECT');
		controlarError(err);
	}
	);

