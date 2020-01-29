'use strict'

//Diferencias entre var y let
var numero = 40;
console.log(numero); //El valor es 40

if(true){
    var numero = 50;
    console.log(numero); //El valor es 50
}

console.log(numero); //El valor es 50

var texto = "Curso de javascript";
console.log(texto); //El texto es Curso de javascript

if(true){
    let texto = "Curso";
    console.log(texto); //El texto es Curso
}

console.log(texto); //El texto es Curso de javascript

/*
La variable let permite definir variables que sólo funcionan dentro del bloque de código en donde se crearon,
a diferencia del var que no tiene esa limitante, es decir, var es una variable global
*/