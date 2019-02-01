require('./cfg/config');

const app = require('./routes/usuario');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const colors = require('colors');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// MIDDLEWARE
app.use(bodyParser.json());

//https://mongoosejs.com/docs/index.html


mongoose.connect('mongodb://localhost:27017/node_pru0001', (err, res)=>{
    if( err ){
        throw err;
    }
    console.log('BASE DE DATOS' + ' ONLINE'.green);
   
});


app.listen(process.env.PORT, ()=>{
    console.log(`Escuchando por el puerto ${process.env.PORT}`);
});

