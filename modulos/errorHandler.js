function otraFuncion() {
    serompe();
}

function serompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (error) {
            console.error('Error en el proceso asincrono ...');
            cb(error);
        }
        
    }, 1000);
}

// la funcion asicrona esta en otro thread -> cuando se rompe no hay
// forma de detectar la ruptura

try {
    seRompeAsincrona(function (error) {
        console.log(error.message);
    });
} catch (error) {
    console.error('Vaya, algo se ha roto ...');
    console.error(error.message);
    console.error(error);
    console.log('No pasa nada, hemos capturado el error');
}

console.log('esto de aqui esta al final');