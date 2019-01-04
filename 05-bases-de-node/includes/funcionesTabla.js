'use strict';
const fs = require('fs');
const colors = require('colors');

let generarTabla = (base, limit = 10) => {
    return new Promise((resolve, reject)=>{
         let data = '';
 
         /*if(!Number(base)){
            reject('Introduce valores válidos para base');
            return;
         }*/
 
         for(let i=0; i<=limit; i++){
            data+=`${base} x ${i} = ${base*i} \n`;
         }
 
         fs.writeFile(
            `./tablas/tabla-de-multiplicar-${base}.txt`, 
            data,
            err => {
                if(err){
                    reject(`ERROR EN EL GUARDADO DE LA TABLA.`);
                }else{
                    resolve(`tabla-de-multiplicar-${base}.txt`);
                }
            });
    });
 }


let mostrarTabla = (base) => {
    fs.readFile(  `./tablas/tabla-de-multiplicar-${base}.txt`, (err, input) => {
        if(err){
           console.log('ERROR AL LEER EL FICHERO, O EL FICHERO NO EXISTE.');
           return;
        }

        let buffer = new Buffer.from(input);
        let res = buffer.toString();
        console.log(colors.rainbow(res));
    })
}


module.exports = {
    generarTabla: generarTabla,
    mostrarTabla: mostrarTabla
}