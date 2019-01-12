const express = require('express');
const app = express();
const puerto = 8080;
const home = 'HOME';
const contacto = 'CONTACTO';
const contacta = 'Contacta con nosotros';

//Recoge los CSS y JS
app.use( express.static(__dirname + '/public' ) );

//Express HBS engine
app.set('view engine', 'hbs');


//HOME
app.get('/', (request, response) => {
    response.render('home', {
        home,
        contacto,
        anio: new Date().getFullYear()
    });
});

//CONTACTO
app.get('/contacto', (request, response) => {
    response.render('contacto', {
        home,
        contacto,
        contacta,
        anio: new Date().getFullYear()
    });
});

//ARRANCAR APLICACIÓN
app.listen( puerto, () => {
    console.log(`Aplicación corriendo por el puerto ${puerto}`);
} )