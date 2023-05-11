function hola(nombre, miCallback){
    setTimeout(() => {
        console.log('Hola, ' + nombre)
        miCallback(nombre);
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(function () {
        console.log('Adios, ' + nombre);
        otroCallback();
    }, 1000);
}


console.log('Iniciando proceso...')

hola('Yover', function(nombre){
    adios(nombre, function () {
        console.log('Terminando proceso ...')
    });
}); 

// javascript - funciones - 1er nivel.