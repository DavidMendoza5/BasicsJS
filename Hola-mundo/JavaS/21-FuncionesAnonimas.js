'use strict'

//La funciones anónimas son unciones que no tienen nombre, se utilizan mucho para hacer callbacks

var pelicula = function(nombre){
    return "La película es: " + nombre;
}

//Un callback es una función que se ejecuta dentro de otra función

function suma(numero1, numero2, sumaYMuestra, sumaPorDOs){
    var sumar = numero1 + numero2;
    sumaYMuestra(sumar);
    sumaPorDOs(sumar);
    return sumar;
}

suma(4, 5, dato => { //Arrow function, es una forma de definir un callback y funciona igual que cuando se pone la palabra reservada function, si lleva un parámetro
    //no hay necesidad de ponerle paréntesis, pero si lleva más de uno sí se ponen los paréntesis
    console.log("La suma es: ", dato);
},
function(dato){
    console.log("La suma por dos es: ", (dato*2));
}
);
//console.log(suma(4, 5));