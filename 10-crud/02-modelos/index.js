require('./config/config'); //para configurar el puerto;
require('./modelos/usuario'); //importa el modelo;

const mongoose = require( 'mongoose' );
const colors = require('colors'); // colores
const app = require('./routes/usuario') 



mongoose.connect('mongodb://localhost:27017/node_pru002', {useNewUrlParser: true}, (err, res)=>{
    if( err ){
        throw err;
    }
    console.log('BASE DE DATOS' + ' ONLINE'.green);
   
});




app.listen(process.env.PORT, ()=>{

    console.log('Servidor escuchando por el puerto ' + colors.bgCyan.black(" " + process.env.PORT + " ") );

});