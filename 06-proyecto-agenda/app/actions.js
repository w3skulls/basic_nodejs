'use strict';
const fs = require('fs');
const colors = require('colors');
let listadoTareas =  [];

/**
 * Guarda el fichero con los datos de la nueva tarea;
 */
let saveFile = (data) => {
    fs.writeFile('./app/db.json', JSON.stringify(data), err => {
        if( err ){ 
            console.log(`${err}`.bgRed.white); 
            throw new Error('No se ha podido guardar el archivo.');
        }
        console.log(` ARCHIVO GUARDADO `.bgGreen.white); 
    })
};

/**
 * Recoge una tarea de la lista de tareas almacenadas dentro del fichero json
 */
let loadTarea = (find, completado) => {
    let tareas = loadFile();
    let index = tareas.findIndex( tarea => tarea.description === find );
    if(index>=0){
        listadoTareas[index].done = completado;
        saveFile(listadoTareas);
        return true;
    }
    return false;
}

/**
 * Carga el fichero que tenemos como base de datos;
 */
let loadFile = () => {
    try {
        listadoTareas = require('./db.json');
    } catch (err) {
        listadoTareas = [];
    }
    return listadoTareas;
}

/**
 * Acciones que podemos realizar a través de línea de comandos.
 */
let ACTIONS = {
    create: (desc) => {
        loadFile();
        let data = { description: desc, done: false };
        listadoTareas.push(data);
        saveFile(listadoTareas);
        return;
    }, 
    list: () => {
        for (let item of loadFile()) {
            let imprime = '';
            let completed = '';
            let color_imprime = '';
            if(item.hasOwnProperty('description')){
                imprime += `${item.description}`;
                if(item.hasOwnProperty('done') ){
                    if(item.done.toString() == true.toString()){
                        completed+= ` -- Completada.`;
                        color_imprime = colors.green;
                    }else{
                        completed+= ` -- No Completada.`;
                        color_imprime = colors.red;
                    }
                }
            }
            console.log('TAREA: ' +imprime + ' ' +color_imprime(completed));
        }
    }, 
    update: (find, hecho) => {
        if(loadTarea(find, hecho)){
            console.log(`La tarea se ha actualizado correctamente.`.green);
            return;
        };
        console.log(`No se ha podido actualizar la tarea.`.red);
        //throw new Error('No se ha podido actualizar la tarea.');
    },
    delete: (find) => {
        let index = loadFile().findIndex( tarea => tarea.description === find );
        if(index > -1){
            listadoTareas.splice(index, 1);
            saveFile(listadoTareas);
        }
    }
}


module.exports = {
    ACTIONS: ACTIONS
}