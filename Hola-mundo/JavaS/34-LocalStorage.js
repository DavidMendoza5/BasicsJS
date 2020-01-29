'use strict'

window.addEventListener('load', function() {
// Comprobar disponibilidad del local storage
    if(typeof(localStorage) != 'undefined') {
        console.log("Local storage disponible");
    } else {
        console.log("Local storage no disponible");
    }

// Guardar datos en el local storage
    localStorage.setItem("title", "Curso de JavaScript"); // El primer string es la clave que va a tener y el segundo es el contenido

// Recuperar datos del local storage
    console.log(localStorage.getItem("title"));
    document.querySelector("#peliculas").innerHTML = localStorage.getItem("title");

// Guardar objetos JSON
var usuario = {
    nombre: "David",
    correo: "david@gmail.com",
    web: "david.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario)); // Siempre se debe convertir el JSON a un string para que no se afecten los datos al enviarlos

// Recuperar objeto
var user = JSON.parse(localStorage.getItem("usuario")); //El parse nos sirve para convertir un string a formato JSON
console.log(user);
document.querySelector("#peliculas").append(" " + user.nombre);

// Borrar datos del local storage
//localStorage.removeItem("usuario");
//localStorage.clear(); Borra todo lo que se encuentre en el local storage

});


