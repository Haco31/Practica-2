/* Promesas y Async/Await (Revisited)
Las promesas y async/await son fundamentales para 
manejar operaciones asíncronas.
*/

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ejecutar() {
    console.log("Inicio");
    await esperar(2000);
    console.log("Fin");
}

ejecutar();


function esperar1(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ejecutar1() {
    console.log("Hola");
    await esperar1(5000);
    console.log("Adios");
}

ejecutar1();