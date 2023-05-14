const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('UTF8');

/* readableStream.on('data', function (chunk) {
    console.log(chunk);
    //console.log(chunk.toString()); // dado que es pequeño lo lee de una
    data += chunk; // si fuese más grande, la guardamos y acumulamos
});

readableStream.on('end', function () {
    console.log(data);
}); */

// si el archivo es muy grande se ira recogiendo de a pocos, dependiendo del SO y de la memoria disponible

// recomendado para archivos grandes, trozos de informacion pequeño

/* process.stdout.write('hola'); // se escribe en la salida estandar del sistema
process.stdout.write('que');
process.stdout.write('tal');
 */

// process.stdout ya es un buffer de escritura

const Transform = stream.Transform;

function Mayus(){
    Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus)
    cb();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout)