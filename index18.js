/* Spread y Rest Operators
El operador spread (...) permite expandir elementos 
de un array o propiedades de un objeto.


let numeros = [1, 2, 3];
let nuevosNumeros = [...numeros, 4, 5];
console.log(nuevosNumeros); // [1, 2, 3, 4, 5]

let persona = { nombre: "Ana", edad: 25 };
let nuevaPersona = { ...persona, ciudad: "Madrid" };
console.log(nuevaPersona); // { nombre: "Ana", edad: 25, ciudad: "Madrid" }

// -------------------------------------------------- //

function sumar(...numeros) {
    return numeros.reduce((a, b) => a + b, 0);
}

console.log(sumar(1, 2, 3, 4)); // 10

*/
// -------------------------------------------------- //

/* Spread y Rest Operators
El operador spread (...) permite expandir elementos 
de un array o propiedades de un objeto.
*/

let numeros1 = [1, 2, 3];
let numeros2 = [4, 5, 6];
let combinados = [...numeros1, ...numeros2];
console.log(combinados); // [1, 2, 3, 4, 5, 6]

let persona1 = { nombre: "Rosa", edad: 30 };
let nuevaPersona1 = { ...persona1, ciudad1: "Lima" };
console.log(nuevaPersona1); 

// -------------------------------------------------- //

function sumar(...numeros) {
    return numeros.reduce((a, b) => a + b, 0);
}

console.log(sumar(1, 2, 3, 4)); // 10
console.log(sumar(5, 10, 15)); // 30

// -------------------------------------------------- //