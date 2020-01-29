'use strict'

/*
Utilizando un bucle mostrar la media y la suma de los resultados introducidos por el usuario
hasta que el usuario meta un número negativo
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce números hasta que metas uno negativo", 0));

    if(isNaN(numero)){
        numero = 0;
    } else if(numero > 0){
        suma += numero;
        contador ++;
    }
    console.log("Suma: " + suma, "Contador: " + contador);
} while(numero >= 0)

alert("La suma de todos los números es: " + suma);
alert("La media es: " + (suma/contador));
