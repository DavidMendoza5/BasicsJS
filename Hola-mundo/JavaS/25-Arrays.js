'use strict'

var nombres = ["David", "Pepe", "Sara", "Victoria", "Victor", 52, true];
var lenguajes = new Array("JS", "Python", "C");

console.log(nombres);
console.log(nombres[5]);
console.log(lenguajes);
console.log(lenguajes.length)

/*
var elemento = parseInt(prompt("¿Qué elemento del arreglo quieres?", 0));
if(elemento >= nombres.length){
    alert("Escoge un número entre el 0 y " + nombres.length);
    var elemento = parseInt(prompt("¿Qué elemento del arreglo quieres?", 0)); 
} else{
    alert(nombres[elemento]);


for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>");
}


lenguajes.forEach((elemento, indice, arr) => {
    console.log(arr);
    document.write("<li>" + indice + " " + elemento + "</li>");
});
}*/
for(let data in lenguajes){
    document.write("<li>" + lenguajes[data]+ "</li>");
}
 // Búsquedas en un array

 var busqueda = lenguajes.find((data) => {
    return data == "JS";
 })

 var busqueda2 = lenguajes.findIndex(data2 => data2 == "C"); // Es otra forma de hacer una arrowfunction

 console.log(busqueda);
 console.log(busqueda2);

 var precios = [10, 20, 30, 40, 50, 60, 70];
 var busqueda3 = precios.some(data3 => data3 >= 40); // Este método nos permite saber si existen elementos en el arreglo que cumplan con la condición dada
 console.log(busqueda3);
