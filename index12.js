/* Manejo de Errores
El manejo de errores se realiza con try...catch.
*/

try {
    let resultado = 10 / 0;
    if (!isFinite(resultado)) {
        throw new Error("División por cero");
    }
} catch (error) {
    console.error(error.message); // División por cero
}


try {
    let resultado = 5 / 0;
    if (!isFinite(resultado)) {
        throw new Error("División por cero");
    }
} catch (error) {
    console.error(error.message);
}

try {
    let obj;
    console.log(obj.propiedad); // Esto lanzará un error porque obj es undefined
} catch (error) {
    console.error("Error al acceder a una propiedad de un objeto undefined:", error.message);
}