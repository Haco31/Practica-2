/* AJAX y Fetch
AJAX permite realizar solicitudes HTTP asíncronas para 
cargar datos sin recargar la página.
*/

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
