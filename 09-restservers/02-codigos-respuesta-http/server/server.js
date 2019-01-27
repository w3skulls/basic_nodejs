require('./config/config');
const puerto = process.env.PORT;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// MIDDLEWARE
app.use(bodyParser.json())


app.post('/usuario', (req, res) => {
    let body = req.body;
   
    if ( body.name != undefined ) {
        //Tengo un código 200
        res.json({
            usuario: body
        });
    } else {
        //Envío el código 400 e información del error.
        res.status(400).json({
            ok: 'false',
            messsage: 'Algo ha ido mal.'
        });
    }

    console.log(body);
});


app.listen(puerto, () => {
    console.log(`Aplicación corriendo por el puerto ${puerto}`);
})