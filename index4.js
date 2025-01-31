// if = si - else = entonces

let edad = 18;

if (edad=18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// switch: Ejecuta un bloque de código dependiendo del valor de una expresión.

let dia ="domingo";

switch (dia) {
    case "lunes":
        console.log("Hoy es lunes");
        break;
    case "martes":
        console.log("Hoy es martes");
        break;
    case "miércoles":    
        console.log("Hoy es miércoles");
        break;
    case "jueves":
        console.log("Hoy es jueves");
        break;
    case "viernes":
        console.log("Hoy es viernes");
        break;
    default:
        console.log("Hoy es otro día");
}

/*Bucles
for: Repite un bloque de código un número específico de veces.
*/

for (let i=1; i < 11; i++) {
    console.log("iteración: " + i);
}

/*While:
repite un bloque de código mientras una condición sea verdadera.
*/    

let i = 0;

while (i < 5) {
    console.log("Iteración: " + i);
    i++;
}





