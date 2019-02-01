const key = 'YOURSECRETKE8912399278rY';
const encryptor = require('simple-encryptor')(key);
const express = require( 'express' );
const app = express();
const USUARIO = require('../modelos/usuario');

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get('/usuario', (req, res) => {
    res.send('Peticion GET. Prueba con POST');
});

app.post('/usuario', (req, res)=> {
    
    //acceso a la variable POST
    let body = req.body;

    let usuario = new USUARIO({
        nombre: body.nombre,
        email: body.email,
        password: encryptor.encrypt( body.password ) ,
        img: body.img,
        rol: body.rol,
        estado: body.estado,
        google: body.google
    });


    /**
     * GUARDAR EN LA BASE DE DATOS
     * El método devuelve un ERROR si el usuario no se ha podido insertar
     * y en caso de haber insertado el usuario, devuelve ese mismo usuario.
     */
    usuario.save( (err, usuarioDB ) => {
        if( err ){
            return res.status(400).json({
                err,
                message: "No se han guardado los datos"
            });
        }else{
            console.log('USUARIO INERTADO EN LA BASE DE DATOS.');
            console.log(usuarioDB);
            res.json({
                ok: true,
                usuario: usuarioDB
            });
        }
    });
})


module.exports = app;