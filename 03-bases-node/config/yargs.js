const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
// const multiplicar = require('./multiplicar/multiplicar.js');
const argv = require('yargs')
.command('listar', 'imprime en consola la tabla de multiplicar', opciones)
.command('crear', 'Genera un archivo con la tabla de multiplicar', opciones)
.help()
.argv;

module.exports = {
    argv
}