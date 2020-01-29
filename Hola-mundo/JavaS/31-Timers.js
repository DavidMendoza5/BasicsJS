'use strict'

window.addEventListener('load', function() {

    function intervalo() {
        var tiempo = setInterval(function() {  //También existe el timeout que sólo se ejecuta una vez

            console.log("SetInterval ejecutado");
    
            var encabezado = document.querySelector("h1");
    
            if(encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "40px";
            } else {
                encabezado.style.fontSize = "50px";
            }
        }, 1000); // EL segundo parámetro es el tiempo que va a tardar en ejecutar otra vez lo que le hayamos puesto en la función, está en milisegundos

        return tiempo;
    }

    var tiempo = intervalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function() {
        console.log("Detuviste el setInterval");
        clearInterval(tiempo); // Esta función detiene el setInterval de la varibale que lo contenga
    });

    var start = document.querySelector("#start");
    start.addEventListener("click", function(){
        console.log("Iniciaste el setInterval");
        tiempo = intervalo();
    });
});