const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
//.use :: SON MIDDLEWARES => todas las peticiones pasan siempre por aquí;
app.use(bodyParser.json())
 

/**
 * PETICIÓN GET
 */
app.get('/usuario', (request, response)=>{
    response.json('getUsuario');
});

/**
 * PETICIÓN POST :: Sobre todo se usa para crear nuevos registros;
 */
app.post('/usuario', (request, response)=>{
    response.setHeader('Content-Type', 'text/plain');

    let body = request.body;
    console.log(body);
    response.json({
        persona: body
    });
});

/**
 * PETICIÓN PUT Y PATCH :: se usan para actualizar registros;
 */
app.put('/usuario/:id', (request, response)=> {
    //Recoge el parámetro id de la URL
    let idUrl = request.params.id;
    response.json({
        id: idUrl
    });
});

/**
 * PETICIÓN DELETE :: borrado de registros;
 */
app.delete('/usuario', (request, response)=>{
    response.json('La petición DELETE se usa para borrar registros.');
});

app.listen(port, ()=>{
    console.log(`aplicación corriendo por el puerto ${port}`);
});