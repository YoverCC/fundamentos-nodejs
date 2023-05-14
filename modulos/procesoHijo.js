const { exec, spawn } = require('child_process'); // sintaxis EM6 para acceder a un elemento del objeto

/* exec('node modulos/consola.js', (err, stdout, sterr) => {
    if(err){
        console.error(err);
        return false;
    }
    console.log(stdout);
});

// es asincrono
 */

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

// eventos node

proceso.stdout.on('data', function (dato) {
    console.log('¿Esta muerto?');
    console.log(proceso.killed);
    console.log(dato.toString());
})

proceso.on('exit', function () {
    console.log('el proceso terminó');
    console.log(proceso.killed);
})


//console.log('Cualquier otra instruccion');

/*
NOTAS:

- Usa spawn cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
- Usa exec cuando quieras que el proceso hijo devuelva mensajes de estado simples.
- Usa spawn cuando quieras recibir datos desde que el proceso arranca.
- Usa exec cuando solo quieras recibir datos al final de la ejecución.

 */