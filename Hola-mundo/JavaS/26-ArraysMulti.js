'use strict'

var categorias = ["Accion", "Suspenso", "Comedia", "Drama"];

var peliculas = ["1917", "Klaus", "Dunkirk"];
peliculas.push("Batman"); // El método push nos permite agregar un elemento al arreglo

var cine = [categorias, peliculas];

console.log(cine);
console.log(cine[0][2]); // Accedemos al elemento categorias (posición 0), comedia (posición 2)

peliculas.sort(); // Este método ordena los elementos del arreglo por orden alfabético
console.log(peliculas);

peliculas.reverse(); // Ordena el arreglo del último elemento al primero 
console.log(peliculas);

var elemento;
/*
while(elemento != "terminar"){
    elemento = prompt("Introduce una película", "terminar");
    peliculas.push(elemento);
}
peliculas.pop(); // Sirve para eliminar el último elemento del arreglo

console.log(peliculas);

elemento = prompt("Introduce una película para eliminar");
var indice = peliculas.indexOf(elemento)

if(indice != -1){
    peliculas.splice(indice, 1);
} else {
    alert("Esa película no se encuentra");
}
console.log(peliculas);

var peliculas2 = peliculas.join() // Este método convierte un arreglo a un string separados por comas
console.log(peliculas2);
*/

var cadena = "texto1, texto2, texto3"
var cadena_array = cadena.split(", ");
console.log(cadena_array);