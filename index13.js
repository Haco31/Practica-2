/* LocalStorage
localStorage permite almacenar datos en el navegador de forma persistente.
*/

localStorage.setItem("nombre", "Carlos");
let nombre = localStorage.getItem("nombre");
console.log(nombre); // Carlos

localStorage.removeItem("nombre");


localStorage.setItem("nombre", "Harol");
let nombre1 = localStorage.getItem("nombre");
console.log(nombre1);

localStorage.removeItem("nombre");

nombre = localStorage.getItem("nombre");
console.log(nombre);