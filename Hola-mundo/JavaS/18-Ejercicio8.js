'use strict'

/*
Calculadora que pida dos números por pantalla, si metemos
mal algún número, que nos los vuelva a pedir y que nos
muestre en el cuerpo de la página en un alert y por consola
los resultados (sumar, restar, multiplicar y dividir)
*/

var numero1 = parseInt(prompt("Introduce un número: ", 1));
var numero2 = parseInt(prompt("Introduce un segundo número: ", 1));

while(numero1<0 || numero2<0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce un número: ", 1));
    numero2 = parseInt(prompt("Introduce un segundo número: ", 1));
}

var resultado = "La suma es: " + (numero1+numero2) + "<br/>"+
                "La resta es: " + (numero1-numero2) + "<br/>"+
                "La multiplicación es: " + (numero1*numero2) + "<br/>"+
                "La división es: " + (numero1/numero2) + "<br/>";


var resultado_alert = "La suma es: " + (numero1+numero2) + "\n"+
                "La resta es: " + (numero1-numero2) + "\n"+
                "La multiplicación es: " + (numero1*numero2) + "\n"+
                "La división es: " + (numero1/numero2) + "\n";

document.write(resultado);
alert(resultado_alert);

