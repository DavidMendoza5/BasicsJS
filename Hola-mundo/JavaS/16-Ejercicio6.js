'use strict'

/*
Programa que nos diga si un número es par o impar
1.- Ventana prompt
2.- Validar el número, si no lo es que nos pida de nuevo el número
*/

var number = parseInt(prompt("Introduce un número: ", 0));

while(isNaN(number)){
    number = parseInt(prompt("Introduce un número: ", 0));
}

if(number%2 == 0){
    alert("Es número par");
} else{
    alert("Es impar");
}