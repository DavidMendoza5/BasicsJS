'use strict'

/*
Hacer un programa que muestre todos los números entre 2 números introducidos
por el usuario
*/

var num1 = parseInt(prompt("Introduce el primer número: ", 0));
var num2 = parseInt(prompt("Introduce el segundo número: ", 0));

var numeros = num1+1;
document.write("<h1>De"+num1+" a "+num2+" están estos números: </h1>"); //Esta función nos permite escribir texto en ña página
while(numeros < num2){
    //console.log(numeros);
    document.write(numeros+"<br>");
    numeros ++;
}

/*
for(var i = num1; i < num2, i++){
    document.write(i+"<br>");
}
*/
