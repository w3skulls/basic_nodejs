let CLIMA = [
{id: 1, name: 'Madrid', tiempo: 'nublado'},
{id: 2, name: 'Barcelona', timepo: 'soleado'}
];



/*
Números de la lotería
84703 > niño 
53364 > niño
*/

let checkClima = function(ciudad){
	console.log(ciudad);
	let res = CLIMA.find((c)=>{
		return c.name == ciudad;
	});
	return res;
}

let res = checkClima('Madrid');
console.log(res);


/*
const promise = new Promise((resolve, reject) => {
	const number = Math.floor(Math.random() * 10);

	setTimeout(
		() => number > 5
			? resolve(number)
			: reject(new Error('Menor a 5')),
		1200
	);
});

promise
	.then(number => console.log(number))
	.catch(error => console.error(error));
	*/
