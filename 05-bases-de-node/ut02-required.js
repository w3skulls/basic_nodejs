'use strict';

//requireds
const fs = require('fs'); //la librería ya existe en node
//const express = require('express');  //pauqetes no nativos de node
//const milb = require('./milib'); //mi propia libreria

//Vamos a grabar en un archivo de texto la tabla de multplicar;
let base = 10;
let data = '';


getTabla(base);
fs.writeFile(
	`tablas/tabla_${base}_multiplicar.txt`,
	data, 
	(err) => {
		if (err) throw err;
		console.log('Archivo creado!');
	});


