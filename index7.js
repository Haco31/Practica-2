/* Objetos
Los objetos son colecciones de pares clave-valor.
*/

let persona = {
    nombre: "Laura",
    edad: 28,
    ciudad: "Barcelona"
};

console.log(persona.nombre); // Laura
console.log(persona["edad"]); // 28



let coche = {
    marca: "Jeep",
    modelo: "Wrangler",
    año: 2020,
};

console.log(coche.marca + " " + coche.modelo + " " + coche.año); // Jeep Wrangler
