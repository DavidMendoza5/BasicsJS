'use strict'

//Operadores
var numero_uno = 7;
var numero_dos = 12;
var operacion = numero_uno + numero_dos;

alert("El resultado de la operación es: " + operacion);

//Tipos de datos
var numero_entero = 44; //Enteros
var cadena_de_texto = "Hola mundo"; //Cadenas
var verdadero_falso = true; //Booleanos

var numero_falso = "33";

console.log(Number(numero_falso)+7); //La función Number transforma un valor flotante o entero a diferecia de parseInt que sólo lo convierte en entero
console.log(String(numero_falso)+4);
console.log(typeof verdadero_falso); //El typeof sirve para saber el tipo de dato que contiene una variable
console.log(typeof cadena_de_texto);
console.log(typeof numero_entero);

