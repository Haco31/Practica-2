/*Clases y POO
JavaScript soporta programación orientada a objetos (POO) mediante clases.
*/
/*
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}

let persona = new Persona("Ana", 30);
persona.saludar(); // Hola, mi nombre es Ana
*/

class Coche {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    detalles() {
        console.log(`La marca del coche es ${this.marca} y el modelo es ${this.modelo} del año ${this.año}`);
    }
}

let coche = new Coche("Jeep", "Wrangler", 2020);
coche.detalles();
