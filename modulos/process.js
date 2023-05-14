//const process = require('process');

// process viene dentro de los modulos globales, por lo que no hace falta requerirlo

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('Yover, el proceso acabó');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca');
    }, 0);
    // no se ejecuta lo asincrono, todo debe ir sincrono aqui
});

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya, se nos ha olvidado capturar un error');
    console.error(err);
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 2000);
})

setTimeout(() => {
    console.log('Esto si se va a ver');
}, 1000);

//process.on('uncaughtRejection') - para promesas que sean rechazados

funcionQueNoExiste();

console.log('Esto si el error no se recoje, no sale');