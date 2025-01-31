/* Closures
Un closure es una función que recuerda el entorno en el que fue creada.
*/
/*
function crearContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    };
}

let contador = crearContador();
console.log(contador()); // 1
console.log(contador()); // 2
*/

function crearContador2() {
    let contador = 0;
    return function() {
        contador+=2;
        return contador;
    };
}
let contador = crearContador2();
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
