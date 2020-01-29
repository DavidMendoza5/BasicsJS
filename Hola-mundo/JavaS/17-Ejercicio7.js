'use strict'

/*
Tabla de multiplicar de un número introducido por pantalla
*/

var numeromulti = parseInt(prompt("Introduce el número del que quieres la tabla de multiplicar", 1));

for(var i=1; i<=10; i++){
    document.write(i+"x"+numeromulti+"="+(i*numeromulti)+"<br/> ");
}

//Todas las tablas de multiplicar
document.write("Todas las tablas de multiplicar <br/>");
for(var i=1; i<=10; i++){
    document.write("<h1>Tabla del "+i+"</h1>");
    for(var c=1; c<=10; c++){
        document.write(c+"x"+i+"="+(i*c)+"<br/> ");
    }
}
