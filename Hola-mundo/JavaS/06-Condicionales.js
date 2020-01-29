'use strict'

//Condicional if

var edad1 = 30;
var edad2 = 12;

if(edad1 > edad2){
    console.log("Edad 1 es mayor que edad 2");
} else{
    console.log("La edad 1 es menor");
}

var edad3 = 35;
var nombre = "David Suárez";

if(edad3 >= 18){
    console.log(nombre + " tiene " + edad3 + " años");
    if(edad3 <= 33){
        console.log("Todavía eres millenial");
    } else if(edad3 >= 70){
        console.log("Eres anciano");
    } else{
        console.log("Ya no eres millenial");
    }
} else{
    console.log(nombre + " es menor de edad");
}

//Operadores lógicos

var year = 2019

if(year != 2016){
    console.log("El año no es 2016");
}

if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
} else{
    console.log("Estamos en la era post moderna");
}

if(year == 2008 || (year == 2029 && year >= 2018)){
    console.log("El año es 2008 o 2019");
} else{
    console.log("Año no registrado");
}