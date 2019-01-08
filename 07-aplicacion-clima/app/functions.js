const axios = require('axios');
const colors = require('colors');

let getWeather = (argv) => {
    let loc = getCoord(argv);
    console.log(loc);
}

let getCoord = (argv) => {
    let opcion = argv.direction;
    let encodedURL = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURI(opcion)+'&key=AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI';
    
    /**
    * Recoge los datos de longitud y latitud de la localización que se escoja;
    */
    axios.get(encodedURL)
    .then(function (response) {
        return ( {
            lat: response.data.results[0].geometry.location.lat,
            lng: response.data.results[0].geometry.location.lng,
            address: response.data.results[0].formatted_address
        });
    })
    .catch(function (error) {
        console.log(colors.red(error));
    });
}


module.exports = {
    getWeather
}