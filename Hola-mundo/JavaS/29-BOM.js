'use strict'

console.log(window.innerHeight); // Con window podemos acceder a las propiedades de la ventana del navegador, en este caso queremos saber la altura
console.log(window.innerWidth);

console.log(screen.height); // Es otra forma de saber la altura, solo que este es de toda la pantalla, no sólo de la ventana del navegador
console.log(screen.width);

console.log(window.location); // location sirve para obtener la url con sus propiedades

function redirect(url) {
    window.location.href = url // con el href hacemos referencia a la url, podemos obtenerla con este método o incluso hacer que nos redireccione
}

function newWindow(url) {
    window.open(url); // Este método nos redirecciona a otra url pero abriendo una nueva pestaña
    //window.open(url, "", "height = 300, width = 400") Con estos dos últimos parámetros le indicamos las medidas de la ventana nueva que abrirá
}