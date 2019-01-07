const argv = require('./config/yargs').argv;
const ACTIONS = require('./app/actions').ACTIONS;

let comando  = argv._[0];

switch ( comando ){
    case 'create': 
        ACTIONS.create(argv.description);
        break;
    case 'list':
        ACTIONS.list();
        break;
    case 'update':
        ACTIONS.update(argv.find, argv.hecho);
        break;
    case 'delete':
        ACTIONS.delete(argv.find);
        break;
    default: console.log( 'No se reconoce el comando.' ); break;
}