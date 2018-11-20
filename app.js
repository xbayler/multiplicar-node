/*const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'c'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;*/

/*const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar')
    .command('crear', 'Crea un archivo con la tabla de multiplicar')
    .option('base', {
        describe: 'Base para la tabla de multiplicar',
        demand: true,
        alias: 'b'
    })
    .option('limite', {
        describe: 'Límite de numeros para mostrar la tabla',
        alias: 'l',
        default: 10
    })
    .help()
    .argv;*/

const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(err => console.log(`Error: ${err}`.red));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite).then(tabla => console.log(tabla)).catch(err => console.log(`Error: ${err}`.red));
        break;
    default:
        console.log('Comando no reconocido.');
}