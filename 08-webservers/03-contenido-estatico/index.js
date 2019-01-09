'use strict';

const express = require('express');
const app = express();
const port = 9999;

/**
 * Para poder mostrar nuestro html necesitamos un MIDDLEWARE
 * Un middleware es un callback o una instrucción que se ejecuta siempre (sin importar la URL que se pida)
 */
app.use( express.static( __dirname + '/public' ));
//http://localhost:9999/home.html
//http://localhost:9999/index.html
//http://localhost:9999

/**
 * Todo el contenido de la carpeta públic tiene contenido público, es visible por cualquier usuario.
 */

app.listen(port, () => {
    console.log('Server escuchando en el puerto ' + port);
    console.log(__dirname);
});