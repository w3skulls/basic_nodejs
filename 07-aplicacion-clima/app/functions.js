const axios = require('axios');
const colors = require('colors');

let getWeather = (direccion) => {
    let res = getCoord(direccion)
        .then( response => console.log(response) )
        .catch( err => console.log(colors.red( err )) )
}

let getCoord = async (direccion) => {
    let encodedURL = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURI(direccion)+'&key=AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI';
    /**
    * Utilizamos async y await.
    * Espero a que la petición AXIOS regrese. 
    * Lo que devuelva, lo guardamos en la variable respuesta.
    * AWAIT devuelve una promise, por lo que podemos usar .then y .catch;
    */
    let response = await axios.get(encodedURL);
    if( response.data.status == 'ZERO_RESULTS' ){
        //Throw new Error => Salimos directamente.
        throw new Error(`No se han encontrado resultados`.bgRed.white);
    }

    if( response.data.status == 'INVALID_REQUEST' ){
        throw new Error (`La dirección solicitada no es válida.`.bgRed.white);
    }

    return {
        lat: response.data.results[0].geometry.location.lat,
        lng: response.data.results[0].geometry.location.lng,
        address: response.data.results[0].formatted_address
    };
}

module.exports = {
    getWeather
}