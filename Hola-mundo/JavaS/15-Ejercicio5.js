'use strict'

/*
Programa que muestre todos los números divisores de un
número introducidos con un prompt
*/

var numero = parseInt(prompt("Introduce un número: ", 0));

for(var i = 1; i<=numero; i++){
    if(numero%i == 0){
        console.log("Divisor: "+i);
    }

}