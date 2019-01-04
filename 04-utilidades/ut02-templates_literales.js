let nombre = 'Deadpool';
let real   = "Wade Winston";

console.log(nombre + " " + real);

let nombreCompleto = nombre + ' - ' + real;
let nombreTemplate = `${nombre} - ${real}`;

console.log(`${nombreCompleto}`);
console.log(`${nombreTemplate}`);

if (nombreCompleto === nombreTemplate) {
	console.log(`Son idénticos`);
}
 
function getNombre(n){
	return `${n}`;
}


console.log('NOMBRE = ' + getNombre(real));
