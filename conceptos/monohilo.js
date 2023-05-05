console.log('Hola mundo');

let i = 0;

setInterval(function(){
    console.log(i);
    i++;

    /*if(i === 5){
        var a = 3 + z;
        // el error parara por completo el proceso, se debe estar pendietne de todo lo que pasa en el codigo
        // asegurarse de los parametros
        // Ley de Murph - Si algo puede salir mal, saldra mal.
    }*/
}, 1000);

// Thread pool - ejecuta el setInterval porque es asincrono, por ello se ejecuta
// el segundo console.log

console.log('Segunda instruccion');