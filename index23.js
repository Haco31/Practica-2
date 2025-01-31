/* Event Loop y Concurrencia
JavaScript es un lenguaje de un solo hilo, pero maneja la concurrencia 
a través del event loop.
*/

console.log("Inicio");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promesa");
});

console.log("Fin");

// Salida:
// Inicio
// Fin
// Promesa
// Timeout

/* Event Loop y Concurrencia
JavaScript es un lenguaje de un solo hilo, pero maneja la concurrencia 
a través del event loop.
*/

console.log("Inicio");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

Promise.resolve().then(() => {
    console.log("Promesa 1");
}).then(() => {
    console.log("Promesa 2");
});

console.log("Fin");

// Salida esperada:
// Inicio
// Fin
// Promesa 1
// Promesa 2
// Timeout 1
// Timeout 2