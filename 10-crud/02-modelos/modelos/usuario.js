const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');



let rolesValidos = {
    values: [ 'USER_ROL', 'ADMIN_ROL' ],
    message: 'El {{VALUE}} no es válido.'
}

/**
 * Shema del usuario.
 */
let usuarioSchema = new Schema({
    nombre: {
        type: String,
        dafault: 'KARIBE',
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: true,
        default: '123456',
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false
    },
    rol: {
        type: String,
        required: true,
        default: 'USER_ROL',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});


/**
 * Modificamos los métodos del prototipo para devolver en el front un usuario
 * sin el campo contraseña.
 * Siempre se van a leer los métodos cuando afectamos en el schema.
 */
usuarioSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}



usuarioSchema.plugin( uniqueValidator, {
    message: 'El {{PATH}} ya existe'
} );


/**
 * Exporta un Usuario con la configuración del usuarioSchema;
 */
module.exports = mongoose.model( 'Usuario', usuarioSchema );