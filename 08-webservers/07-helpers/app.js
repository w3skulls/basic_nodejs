const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 8080;

//Importamos los helpers;
require('./helpers/helpers');

//nodemon server -e js,hbs,html,css,img

const VARS = {
    home_vars: {
        title:  'Inicio',
        desc:   'Bienvenido a mi web',
        amp:    'Bienvenido a mi primera página web con node y express. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore',
        anio: new Date().getFullYear()
    },
    about_vars: {
        title:  'About us',
        desc:   'Soy desarrollador web y multiplataforma... ',
        amp:    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        anio: new Date().getFullYear()
    },
    links:  {
        home: 'Home',
        about: 'About us'
    }
};

//REGISTRO DE PARCIALES
hbs.registerPartials(__dirname + '/views/partials/', () => {
    console.log(`Usando plantilla`.green);
});

//ASOCIAR ESTÁTICOS
app.use( 
    express.static(__dirname+'/public')
);

//ESTABLECER EL SISTEMA DE PLANTILLAS
app.set('view engine', 'hbs');



//HOME
app.get('/', (request, response) => {
    response.render('index', {
        //TODO :: variables para las vistas.
        vars: VARS.home_vars,
        links: VARS.links
    });
} );

//ABOUT 
app.get('/about', (request, response) => {
    response.render('about', {  
        //TODO :: variables para las vistas.
        vars: VARS.about_vars,
        links: VARS.links
     });
})

//ARRANCAR APLICACIÓN
app.listen( port, () => {
    console.log(`Aplicación corriendo por el puerto ${port}`);
} );












