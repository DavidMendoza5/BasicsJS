'use strict'

window.addEventListener('load', () => { // El parámetro load nos permite poner el script en el head el html para poder usar el body, sin necesidad de ponerlo al
    // final del body cuando ya esténcreados todos los elementos, debido a que el load ya cargó todos estos elementos
    //var btn = document.getElementById('btn');

    function cambiarColor() {
        console.log("Me has dado clic");
        
        var bg = btn.style.background;
        
        if(bg == "green") {
            btn.style.background = "red";
        } else {
            btn.style.background = "green";
        } 
        
        btn.style.padding = "10px";
        btn.style.border = "1px solid #ccc";

        return true;
    }

    var btn = document.querySelector("#btn");

    btn.addEventListener('click', function() {
        cambiarColor();
    });

    // Mouse over
    btn.addEventListener('mouseover', function(){
        btn.style.background = "#ccc";
    });

    // Mouse out
    btn.addEventListener('mouseout', function(){
        btn.style.background = "yellow";
    });

    // Focus
    var input = document.querySelector("#campo_nombre");

    input.addEventListener('focus', function(){
        console.log("Estás dentro del input");
    });

    // Blur
    input.addEventListener('blur', function(){
        console.log("Estás fuera del input");
    });

    // Keydown
    input.addEventListener('keydown', function(event){
        console.log("Pulsaste la tecla: ", String.fromCharCode(event.keyCode)); // De esta forma puedes capturar los eventos del teclado
    });

    // Key press
    input.addEventListener('keypress', function(event){
        console.log("Estás pulsando la tecla: ", String.fromCharCode(event.keyCode)); // De esta forma puedes capturar los eventos del teclado
    });

    // Keyup
    input.addEventListener('keyup', function(event){
        console.log("Tecla soltada: ", String.fromCharCode(event.keyCode)); // De esta forma puedes capturar los eventos del teclado
    });
});

