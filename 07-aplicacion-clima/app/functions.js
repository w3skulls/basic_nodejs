const axios = require('axios');
const colors = require('colors');
const {UTILS} = require('./utils');
const WEATHERAPIKEY = 'TU API KEY';
const GOOGLEAPIKEY = 'TU API KEY';

/**
 * Envía los datos del tiempo al usuario;
 */
let getWeather = (localizacion) => {
    let res = getCoord(localizacion)
        .then( response => {
            getWeatherData(response)
                .then( result => {
                    //console.log(result);
                    console.log ({
                        descripcion :       result.data.weather[0].description,
                        temperatura:        result.data.main.temp + 'C',
                        temperatura_min:    result.data.main.temp_min + 'C',
                        temperatura_max:    result.data.main.temp_max + 'C',
                        viento:             result.data.wind.speed + 'km/h',
                        amanece:            UTILS.ms2Date(result.data.sys.sunrise),
                        anochece:           UTILS.ms2Date(result.data.sys.sunset)
                    });
                })
                .catch(err => console.log( colors.red(err) ));
        })
        .catch( err => console.log(colors.red( err )) );
}


/**
 * Recoge los datos de la API https://home.openweathermap.org/
 */
let getWeatherData =  async (params) => {
    let encodedDirection = encodeURI(params.address);
    let url = 'http://api.openweathermap.org/data/2.5/weather?lat='+params.lat+'&lon='+params.lng+'&units=metric&appid='+WEATHERAPIKEY;
    let response = await axios.get(url);

    if(response.data.cod == 400){
        throw new Error(colors.bgRed.white(`Code 400`));
    }

    return response;
}

/**
 * Recoge los datos longitud, latitud y dirección de la localización que pasamos por parámetro.
 */
let getCoord = async (localizacion) => {
    let encodedURL = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURI(localizacion)+'&key='+GOOGLEAPIKEY;
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