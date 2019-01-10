const express = require( 'express' );
const app = express();
const port = 8080;

/**
 *  MIDDLEWARE
 */
app.use( express.static( __dirname + '/public' ));

app.listen(port, () => {
    console.log( `Server escuchando por el puerto ${ port }` );
});