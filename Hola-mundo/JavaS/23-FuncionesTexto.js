'use strict'

//Transformación de cadenas
var number = 20;
var text1 = "Hello";
var text2 = "  World from JavaScript from VSCode  ";
var data = number.toString();
var data2 = text1.toUpperCase();
var data3 = text2.toLowerCase();

console.log(data)
console.log(data2)
console.log(data3)

//Calcular la longitud que tiene un texto

var name = "David Mendoza"
var name2 = ["Hello", "World"]

console.log(name.length); //Cuenta los espacios
console.log(name2.length);

//Concatenar textos
var total_text = text1 + " " + text2;
console.log(total_text);

var total_text2 = text1.concat(" " + text2);
console.log(total_text2);

var searching = text2.indexOf("from"); //indexOf nos da la posición de la palabra, si no existe la palabra nos tira -1
console.log(searching);

var searching2 = text2.lastIndexOf("from"); //Nos da la última coincidencia de la palabra 
console.log(searching2);

var searching3 = text2.search("from"); //Hace lo mismo que indexOf
console.log(searching3);

var searching4 = text2.match("from"); //Nos devuelve un array con las palabras
console.log(searching4);
var searching5 = text2.match(/from/g); //Al poner las barras y el g le decimos que nos haga una búsqueda global, es decir, de todas las coincidencias
console.log(searching5);

var searching6 = text2.substr(2, 8); //Con este método le decimos que nos muestre lo que está después de la posición que le damos (primer número) y con el segundo número le decimos
//cuántos caracteres queremos que muestre
console.log(searching6);

var searching7 = text2.charAt(23); //Nos muestra el caracter que se encuentra en la posición dada
console.log(searching7);

var searching8 = text2.startsWith("World"); //Nos devuelve true si encontró la palabra al inicio de la oración o false si no la encontró
console.log(searching8);

var searching9 = text2.includes("JavaScript"); //Nos devuelve true si encontró la palabra en el texto o false si no la encontró
console.log(searching9);

var searching11 = text2.replace("JavaScript", "Python"); //Reemplaza la palabra que le damos al principio por la palabra que le damos después
console.log(searching11);

var searching12 = text2.slice(10, 15); //Corta el texto hasta el numero que se le dió y sólo muestra la parte no cortada, también se puede poner un segundo número
//que indeica hasta cuá caracter va a mostrar
console.log(searching12);

var searching13 = text2.split(" "); //Mete todo el texto dentro de un array, se le puede poner un separador, en este caso se usa el espacio debido
//a que las palabras están separadas por espacios en el texto original
console.log(searching13);

var searching14 = text2.trim(); //Quita los espacios que tenga el texto al inicio y al final 
console.log(searching14);