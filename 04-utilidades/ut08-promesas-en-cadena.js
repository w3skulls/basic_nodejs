'use strict';

let _ROMS = [{
	id: 1,
	rom: 'Nintento 64'
}, {
	id: 2,
	rom: 'Sega'
}];

let _TITULOS = [{
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


let _getJuego = (titulo) => {
	return new Promise((resolve, reject)=>{
		let juegoDB = _TITULOS.find(elem => { return elem.juego == titulo; });
		if(!juegoDB){
			reject(titulo + ' no está disponble.');
		}
		resolve(juegoDB);
	});
}

let _getROM = (juego) => {
	return new Promise( (resolve, reject)=>{
		let romDB = _ROMS.find( (rom) => { return juego.rom == rom.id;});
		if(!romDB){
			reject(`No se ha encontrado la ROM para el juego ${juego.juego}`);
		}
		resolve({
			ID: juego.id,
			TITLE: juego.juego,
			COMPANY: juego.company,
			ROM: romDB.rom
		});
	})
};


_getJuego('Tetris')
	.then ( titulo    => { return _getROM( titulo ); }) //devuelve una nueva promesa;
	.then ( respuesta => { console.log(respuesta); } )	// ... y concateno;
	.catch( err       => { console.log(err); } );		// ... controla errores;
