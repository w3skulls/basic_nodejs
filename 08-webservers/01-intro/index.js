'use strict';

/**
 * HTTP
 * Es un paquete que nos permite crear de forma rápida un --webserver, es decir, un servidor para desplegar nuestra aplicación.
 */
 const colors = require('colors');
 //Paso 1: Declaramos una variable http
 const http = require('http');
 const puerto = 8080;

/**
 * CREAR EL SERVER
 * Para poder escuchar peticiones http, necesitamos crear un servidor;
 * El servidor recibe un callback con las peticiones (requests) y respuestas (responses)
 * Especificamos el puerto de escucha (8080)
 * Con esto tenemos una web funcional, pero tambien podemos especificar un servicio haciendo que se devuelva un JSON;
 */
http
    .createServer( (req, res) => {
        res.writeHead(200, {'Content-type': 'application/json'});
        let salida = {
            'name'  : 'webserver app',
            'desc'  : 'Mi primera aplicación utilizando un servidor con nodejs',
            'url'   : req.url //indica la url que se está solicitando
        };

        //res.write('Hola mundo');
        res.write( JSON.stringify( salida ) );
        res.end();
    })
    .listen(puerto);

console.log( 'Server escuchando por el puerto ' + puerto );

