/* Map, Filter y Reduce
Estos métodos son muy útiles para manipular arrays.
*/

//map: Crea un nuevo array aplicando una función a cada elemento. //
let numeros1 = [1, 2, 3];
let cuadrados = numeros1.map(num => num * num);
console.log(cuadrados); // [1, 4, 9]

//filter: Crea un nuevo array con los elementos que cumplen una condición. // 
let numeros2 = [1, 2, 3, 4, 5];
let pares = numeros2.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]

//reduce: Reduce un array a un único valor aplicando una función acumuladora.//
let numeros = [1, 2, 3, 4];
let suma = numeros.reduce((a, b) => a + b, 0);
console.log(suma); // 10

// -------------------------------------------------- //

