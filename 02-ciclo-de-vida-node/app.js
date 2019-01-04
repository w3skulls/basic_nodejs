'use strict';

//Se crea el main( ) en la PILA DE PROCESOS

//PASO 1 :: se registra la función saludar;
//PASO 2 :: pasa a la siguiente línea :: dispara la función saludar;
//PASO 3 :: ejecuta lo que hay dentro de la función => con el return de la función, la fx sale de la pila de procesos;
//PASO 4 :: se ejecuta el console.log( );
//PASO 5 :: se elimina el main de la pila de procesos;


function saludar( name ){
  let mensaje = `Hola ${ name }`;
  return mensaje;
}


//node app2.js
let saludo = saludar('W29skulls');

console.log(saludo);
