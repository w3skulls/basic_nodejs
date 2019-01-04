'use strict';

/**
* Se crea el main() en la pila de procesos (call stack)
* Se ejecuta el primer console.log / se elimina de la pila
* Coloca el primer timeOut y lo registra (no lo ejecuta), la coloca en el bloque NODE APIS
* Registra el segundo TimeOut / lo coloca en la pila de espera (NODE APIS)
* Registra el tercer TimeOut / lo coloca en la pila de espera (NODE APIS)
* Si ya han pasado 0 segundos, los timeOut se colocan en la cola de Callbacks
* Mientras se ejecuta el último console.log;
* Se elimina el main de la PILA DE PROCESOS (CALL STACK)
* Salen los callbacks de la COLA DE CALLBACKS, se ejecutan y se eliminan de la PILA DE PROCESOS
* El timeOut 3000ms pasa a la COLA DE CALLBACKS y a la PILA DE PROCESOS
* Cuando no hay procesos, nuestra aplicación acaba;
*/

//POS 1
console.log('INICIO DEL PROGRAMA');


//POS 5 :: Se ejecuta en 3 segundos
setTimeout( function () {
	console.log('Primer Timeout');
}, 3000);

//POS 3
setTimeout( function () {
	console.log('Segundo Timeout');
}, 0);

//POS 4
setTimeout( function () {
	console.log('Tercer Timeout');
}, 0);


//POS 2
console.log('FIN DEL PROGRAMA');