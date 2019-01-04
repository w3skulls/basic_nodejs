'use strict';

let _ROMS = [{
	id: 1,
	rom: 'Nintento 64'
}, {
	id: 2,
	rom: 'Sega'
}];

let _JUEGOS = [{
	id: 1,
	juego: 'Street Figther',
	company: 'Capcom',
	rom: 2
}, {
	id: 2,
	juego: 'Mario Kart',
	company: 'DCo.' ,
	rom: 1
},
{
	id: 3,
	juego: 'Tetris',
	company: 'Rose Company',
	rom: 1
}];


//async va a devolver una promesa
let getJuego = async (nombre) => {
	let juegoDB = _JUEGOS.find( game => { return game.juego == nombre; } );
	if(!juegoDB){
		throw new Error('No se ha encontrado el juego ' + nombre);
	}
	return juegoDB;
};

let getROM = async (juego) => {
	let romDB = _ROMS.find( rom => { return rom.id == juego.rom; } );
	if(!romDB){
		throw new Error('No se ha encontrado la ROM ' + romDB);
	}
	return ({
		id: juego.id,
		title: juego.juego,
		company: juego.company,
		rom: romDB.rom
	});
}

/*RESOLUCIÓN CON ASYNC & AWAIT*/
let getInfo = async () => {
	let juego = await getJuego('Tetris');
	let respuesta = await getROM(juego);
	return respuesta;
}

getInfo()
.then(resp => console.log(resp))
.catch(err => console.log('ERROR: ', err));

