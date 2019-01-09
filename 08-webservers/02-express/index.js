'use strict';

const express = require('express');
const puerto = 8080;

//declara una variable que es el resultado de la función express;
const app = express();
 
//las peticiones que lleguen por '/' van a ejecutar lo que se encuentre dentro de la función;
app.get('/', (req, res) => {

    let result = {
        name: 'Server express',
        desc: 'Primer server montado con Express',
        url: req.url
    }
    res.send(result);

});


//peticiones que llegan a "/ruta"
app.get('/ruta', (req, res) => {
    res.send(`<h3>Contrenido para /ruta</h3>`);
});


app.listen(puerto, () => {
    console.log('escuchando por el puerto: ' + puerto);
});
