/* Manejo de Errores con Promesas
Las promesas pueden manejar errores con .catch().
*/

fetch('https://jsonplaceholder.typicode.com/invalid-url')
    .then(response => response.json())
    .catch(error => console.error('Error:', error));

    //------------------------------//

        /* Manejo de Errores con Promesas
    Las promesas pueden manejar errores con .catch().
    */
    
    function operacionAsincrona() {
        return new Promise((resolve, reject) => {
            let exito = Math.random() > 0.5; // Simula una operación que puede fallar
            setTimeout(() => {
                if (exito) {
                    resolve('Operación exitosa');
                } else {
                    reject('Operación fallida');
                }
            }, 1000);
        });
    }
    
    operacionAsincrona()
        .then(resultado => {
            console.log(resultado);
        })
        .catch(error => {
            console.error('Error:', error);
        });