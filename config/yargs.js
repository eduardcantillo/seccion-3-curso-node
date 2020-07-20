const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {

        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'crea un archivo con la base y el limite', opt)
    .help()
    .argv

module.exports = {
    argv
}