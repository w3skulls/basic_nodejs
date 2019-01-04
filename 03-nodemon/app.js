let names = ['pepe', 'karibe', 'pochorro'];
let i = 0;
let intervalId;
let contador = 1;

//nodemon app.js
//rs >> reinicia el proceso nodemon;

console.log('------ VUELTA :: '+contador+' -----');
setInterval(function(){
	console.log(names[i]);
	i++;
	if(i > 2){
		contador++;
		i = 0;
		console.log('------ VUELTA :: '+contador+' -----');
	}
},2000);

