/* Prototipos y Herencia
JavaScript utiliza prototipos para la herencia.
*/

function Animal(nombre) {
    this.nombre = nombre;
}

Animal.prototype.saludar = function() {
    console.log(`Hola, soy ${this.nombre}`);
};

function Perro(nombre, raza) {
    Animal.call(this, nombre);
    this.raza = raza;
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

let miPerro = new Perro("Rex", "Labrador");
miPerro.saludar(); // Hola, soy Rex

//-----------------------------------------------------//
function Animal1(nombre1){
    this.nombre1 = nombre1;
}

Animal1.prototype.saludar1 = function(){
    console.log(`Hola, soy ${this.nombre1}`);
};

function Gato(nombre1, raza){
    Animal1.call(this, nombre1);
    this.raza = raza;
}

Gato.prototype = Object.create(Animal1.prototype);
Gato.prototype.constructor = Gato;

let miGato = new Gato("Luna", "Siberiano");
miGato.saludar1(); // Hola, soy Luna