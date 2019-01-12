const hbs = require('hbs');

//HELPERS
hbs.registerHelper('getAnio', () => {
    console.log( 'usando helpers' );
    return new Date().getFullYear();
} );

hbs.registerHelper('toUpper', (text) => {
    return text.toUpperCase();
} );