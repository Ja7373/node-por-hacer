//const { require } = require('yargs');

// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
// console.log('hola mundo');


let comando = argv._[0];
switch (comando) {
    case 'crear':
        console.log('crear por hacer', argv.descripcion);
        let tarea = porHacer.crear(argv.descripcion);
        console.log('tarea creada: ', tarea);
        break;
    case 'listar':
        //console.log('mostrar todas las tareas por hacer');
        let listado = porHacer.getListado();

        for (const tarea of listado) {
            console.log('======= Por Hacer ========'.green);
            console.log(' ', tarea.descripcion);
            console.log(' Estado: ', tarea.completado);
            console.log('==========================='.green);
        }
        break;
    case 'actualizar':
        //console.log('Actualiza una tarea');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('Objeto actualizado: ', actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log('Objeto borrado: ', borrado);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}