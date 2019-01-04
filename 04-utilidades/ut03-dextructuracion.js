let deadpool = {
	nombre: 'Wade',
	apellido : 'Winston',
	alias: 'DEADPOOL',
	poder: 'regeneracion',
	getnombre: function () {
		return `${ this.nombre } ${ this.apellido} - ${ this.alias } - poder: ${ this.poder }`
	}
}


console.log(':Normalmente: ');
let name = deadpool.nombre;
console.log(name);
console.log(deadpool.getnombre());

console.log('\nCon destructuración ECMA6:');
let { nombre: dead_name, alias: dead_alias, poder: dead_poder } = deadpool;
console.log(dead_name, dead_alias,dead_poder);