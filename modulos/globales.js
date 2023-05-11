/* let i = 0;

let intervalo = setInterval(() => {
    console.log('Hola');
    if(i === 3){
        clearInterval(intervalo);
    }
    i++;
}, 1000);
 */

/* setImmediate(function () {
    console.log('Hola')
}); */


// require(); acceder al modulo

// console.log(process); -- variables de entorno, etc

// console.log(__dirname); -- '/home/jarvis182/platziCourses/fundamentos-nodejs/modulos'
// console.log(__filename); -- '/home/jarvis182/platziCourses/fundamentos-nodejs/modulos/globales.js'

// si puedes no usar variables globales no los uses, para eso crea modulos o archivos de config

global.miVariable = 'elValor';
console.log(miVariable); // de preferencia no usarlos