/* Modulos
Los módulos permiten dividir el código en diferentes 
archivos para una mejor organización.
*/

/* archivo math.js
export function sumar(a, b) {
    return a + b;
}

// archivo main.js
import { sumar } from './math.js';

console.log(sumar(2, 3)); // 5


Asegurarce que en el HTML HTML esté 
configurado para usar módulos como este: 
<script type="module" src="main.js"></script>

*/


import { sumar } from './math.js';

console.log(sumar(5, 5)); 

