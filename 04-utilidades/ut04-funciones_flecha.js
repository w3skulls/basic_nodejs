function sumar(a,b){ return a + b; }
console.log("Suma: " + sumar(10,20));

let restar = (a,b) => { return a - b; }
console.log('Resta: ' + restar(1,4));

//Si todo se puede devolver en una línea, podemos resumir:
let multiplicar = (a,b) => 'Multi: '  + a * b;
console.log(multiplicar(2,5));

//Resumen función de flecha; si sólo hay un argumento, podemos volver a resumir:
let saludar = name => `SALUDO: Hola ${name}`;
console.log(saludar('Héctor'));

let gatito = {
	'nombre': 'Karibe',
	'alias': 'Pepe',
	'color': '#000',
	'color_ojos': 'rgba(0,130,10, 0-9)',
	'maullido': 'miaauuu',
	'gritito': 'maaaaahh',
	maullar(){
		return `MAULLANDO: ${this.maullido}`;
	}
}

console.log(gatito.maullar());