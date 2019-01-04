const { argv } = require('./config/yargs');
const colors = require('colors');
const scolors = require('colors/safe');

console.log(argv);

let comando = argv._[0];

switch (comando){
    case 'list': 
        console.log(colors.bgWhite.black(`Comando: ${comando}`));
        break;
    case 'create': 
        console.log(colors.bgGreen.white(`Comando: ${comando}`));
        break;
    case 'update': 
        console.log(colors.bgYellow.black(`Comando: ${comando}`));
        break;
    case 'delete':
        console.log(colors.bgRed.black(`Comando: ${comando}`));
        break;
    default:
        console.log(colors.bgYellow.black(`No se ha encontrado el comando: ${comando}`));
        break;


}