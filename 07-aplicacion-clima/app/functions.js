const axios = require('axios');
const colors = require('colors');
const {UTILS} = require('./utils');
const WEATHERAPIKEY = 'YOUR API KEY';
const GOOGLEAPIKEY = 'YOUR API KEY';

/**
 * Recoge la información del tiempo a través de la API OPENWEATHERMAP
 * a partir de las coordenadas (latitud y longitud) de una determinada 
 * localización que introduce el usuario.
 * La longitud y latitud las recogemos a partir de la API de Google para
 * la geolocalización.
 */
let getInfo = async (localizacion) => {
    
    let coors = await getCoord(localizacion);
    let info = await getWeather(coors);

    return {
        localizacion:       info.name,
        pais:               info.sys.country,
        puestaSol:          UTILS.ms2Date(info.sys.sunset),
        amanecer:           UTILS.ms2Date(info.sys.sunrise),
        tiempo_general:     info.weather[0].description,
        temperatura:        info.main.temp + 'ºC',
        presion:            info.main.pressure + 'Pa',
        minimas:            info.main.temp_min + 'ºC',
        maximas:            info.main.temp_max + 'ºC',
        viento:             info.wind.speed + 'km/h',
        viento_grad:        info.wind.deg + 'º'
    }
}

/**
 * Recoge los datos de la API https://home.openweathermap.org/
 */
let getWeather =  async (params) => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?lat='+params.lat+'&lon='+params.lng+'&units=metric&appid='+WEATHERAPIKEY;
    let response = await axios.get(url);

    if(response.data.cod == 400){
        throw new Error(colors.bgRed.white(`Code 400`));
    }
    return response.data;
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
    getInfo
}