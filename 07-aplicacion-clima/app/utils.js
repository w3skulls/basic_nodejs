'use strict';

module.exports.UTILS = {
    kelvin2C: (kelvin) => { return (kelvin - 273.15).toFixed(2); },
    ms2Date: (s) => { 
        let f = new Date(s*1000);
        let hours = (f.getHours() < 10) ? '0'+f.getHours() : f.getHours();
        let minutes = (f.getMinutes() < 10) ? '0'+f.getMinutes() : f.getMinutes();
        let seconds = (f.getSeconds() < 10) ? '0'+f.getSeconds() : f.getSeconds();
        return hours + ':' + minutes + ':' + seconds;
    },
    miles2km: (miles) => { return (miles*1.609).toFixed(2) }
}