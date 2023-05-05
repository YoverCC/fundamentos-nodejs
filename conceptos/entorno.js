let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'no tengo web';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web)
//ejecuto esto: NOMBRE=Yover node conceptos/entorno.js
//ejecuto esto para dos variables de entorno: NOMBRE=Yover WEB=loquesea.com node conceptos/entorno.js

/*
BUENAS PRACTICAS:

- Variable de entorno MAYUSCULAS: Vienen de los servidores linux antiguo,
las variables de entorno del sistema siempre en mayusculas, si esta formado
de dos palabras se usa guion bajo, por ejemplo MI_WEB.

- Variable en javascript MINUSCULAS: Estandares definidos para variables del
lenguaje de produccion.
*/

console.log('Nuevo log');