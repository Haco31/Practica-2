/* JSON
JSON (JavaScript Object Notation) es un formato de 
intercambio de datos.
*/ 

let persona = {
    nombre: "Juan",
    edad: 25
};

let json = JSON.stringify(persona);
console.log(json); // {"nombre":"Juan","edad":25}

let objeto = JSON.parse(json);
console.log(objeto.nombre); // Juan


let yo = {
    nombre: "Harol",
    edad: 31
};

let json1 = JSON.stringify(yo);
console.log(json1);

let objeto1 = JSON.parse(json1);
console.log(objeto1.nombre); 