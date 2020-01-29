'use strict'

//Parámetros REST

function listadoFrutas(fruta1, fruta2, ...todas_las_frutas){ //Al ponerle los tres puntos, todas_las_frutas nos recibe un array con los valores faltantes y se
    //pueden capturar un número indefinido de valores
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(todas_las_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandía", "Pera", "Melón", "Coco");

//Parámetros SPREAD

var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandía", "Pera", "Melón", "Coco"); //Al ponerle los tres puntos se hace un spread, es decir, tomar a Naranja como fruta 1 y a manzana como
//fruta 2, si no se le ponen los tres puntos lo toma como un array