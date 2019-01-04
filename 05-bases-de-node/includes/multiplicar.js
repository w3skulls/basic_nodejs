'use strict'; 
const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise( (resolve, reject) => {
        let data = '';
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número` );
            return;
        }
        for(let i=0; i<=10; i++){
            data+=`${base} x ${i} = ${base*i}\n`;
        }

        fs.writeFile(
            `./tablas/tabla-multiplicar-${base}.txt`, 
            data, 
            err => {
                if(err)
                    reject(err);
                else
                    resolve(`tabla-multiplicar-${base}.txt`);
            });
    });
};

module.exports = {
    crearArchivo: crearArchivo,
}