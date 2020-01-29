'use strict'

/*
Programa que pida dos números y nos diga cuál es menor, cuál es mayor y si son iguales.
Si los datos no son números o si son menores o iguales a 0, nos debe pedir ingresar los
datos de nuevo
*/

var num1 
var num2 

while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Ingrese el primer número: ", 0));
    num2 = parseInt(prompt("Ingrese el segundo número: ", 0));

    if(num1 == num2){
        alert("Los números son iguales");
    } else if(num1 > num2){
        alert(num1 + " es mayor");
    } else if(num1 < num2){
        alert(num2 + " es mayor");
    } else{
        alert("Introduce números correctos");
    }
}


