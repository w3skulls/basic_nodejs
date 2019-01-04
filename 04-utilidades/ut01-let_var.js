//se puede reinicializar muchas veces, pero coge el valor de la última asignación;
//let no vuelve a inicializarse;
let nombre = 'wolverine';
let i = 0;

if( true ){
	//distinto scope
	nombre = 'magneto';
}

for (i = 0; i < 5; i++) {
	console.log(`i: ${i}`);
}


console.log(nombre);
console.log(i); //i no está definida, con lo que da error;