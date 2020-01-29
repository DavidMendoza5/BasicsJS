'use strict'

// Conseguir elementos con ID

/*
// El getElementById nos permite obtener un elemento del HTML con su ID
var caja =  document.getElementById("caja").innerHTML; // Con .innerHTML se captura lo que hay dentro de las etiquetas con el id

console.log(caja);
*/

function cambiaColor(color) {
    caja.style.color = color; //Cambia el color del texto
}

//var caja =  document.getElementById("caja");
var caja = document.querySelector("#caja"); // Es otra manera de seleccionar elementos del HTML

caja.innerHTML = "Caja 2"; // Cambiar el texto del HTML
caja.style.background = "green"; //Cambiar el fondo

console.log(caja);

// Conseguir elementos por sus etiquetas

var todos_los_divs = document.getElementsByTagName('div');
var contenido_div2 = todos_los_divs[2].textContent; // Estamos accediendo el tercer elemento del arreglo, por lo que podemos usar las propiedades, en este caso
// se usa el textContent para obtener su contenido
var valor;
var seccion = document.querySelector("#mi_seccion");
var hr = document.createElement("hr");



for(valor in todos_los_divs) {
    if(typeof todos_los_divs[valor].textContent == "string") {//Comprobamos que sean parte del DOM para que nos meta otras cosas
        var parrafo = document.createElement("p"); // Sirve para crear etiquetas HTML desde JavaScript
        var texto = document.createTextNode(todos_los_divs[valor].textContent);
        parrafo.append(texto); // Se mete el contenido de texto dentro de la etiqueta que se le puso a la variable párrafo
        seccion.append(parrafo); // Metemos una etiqueta dentro de otra etiqueta
    }
}
seccion.append(hr);

console.log(todos_los_divs);
console.log(contenido_div2);

// Conseguir elementos por sus clases

var divs_rojos = document.getElementsByClassName("rojo");

console.log(divs_rojos);

for(var div in divs_rojos) {
    if(divs_rojos[div].className == "rojo") {
        divs_rojos[div].style.background = "red";
    }
}

// Query selector

var id = document.querySelector("#texto");
var class_rojo = document.querySelector(".rojo"); // Con este método sólo nos muestra un elemento, no nos muestra un arreglo de elementos como lo hace el getElementsByClassName
var etiqueta = document.querySelector("div");
var todos_elementos = document.querySelectorAll("div"); // Nos devuelve todos los elementos que contengan la etiqueta dada

console.log(id);
console.log(class_rojo);
console.log(etiqueta);
console.log(todos_elementos);