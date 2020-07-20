const { crearArchivo, listar } = require('./multiplicar/multiplicar');


const argv = require('./config/yargs').argv
const color = require('colors');




let comando = argv._[0]
switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then(mesa => console.log(mesa))
            .catch(err => console.log(err))
        console.log('listar')
        break

    case 'crear':
        console.log('crear')
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`.blue))
            .catch(err => console.log(err))
        break
    default:
        console.log('comando no reconocido');
}


// let parametro = argv[2]
// let base = parametro.split('=')[1]