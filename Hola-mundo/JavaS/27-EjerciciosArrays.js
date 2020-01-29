'use strict'

/*
1.- Programa que pida 6 números por pantalla y los guarde en un array
2.- Mostrar todos los elementos del array en el cuerpo de la página y en la consola
3.- Ordenarlo y mostrarlo
4.- Invertir su orden y mostrarlo
5.- Mostrar cuántos elementos tiene el array
6.- Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice
*/

// Parte 1

var numeros = [];

for(var i = 0; i <= 5; i++) {
    numeros.push(parseInt(prompt("Ingresa un número al arreglo: ")));
}

// Parte 2
console.log(numeros);
function mostarArray (elementos, textoCustom = "") {
    document.write("<h1>Contenido del arreglo " + textoCustom + "</h1>");
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>")
    });
}
mostarArray(numeros);

document.write("</br>");
// Parte 3
numeros.sort(function (a, b) { return a-b });
mostarArray(numeros, "Oredenados");
document.write("</br>");

// Parte 4
numeros.reverse()
mostarArray(numeros, "Orden invertido");

// Parte 5
console.log(numeros.length);

// Parte 6
var busqueda = parseInt(prompt("Introduce el número que desea encontrar: "));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<h2>Encontrado</h2>");
    document.write("<h2>Posicion " + posicion + "</h2>"); //Muestra la posición al revés debido a la función reverse usada anteriormente
} else {
    document.write("<h2>No encontrado</h2>");
}