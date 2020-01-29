'use strict'

function porConsola(numero1, numero2){
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicación: " + (numero1*numero2));
    console.log("División: " + (numero1/numero2));
    console.log("***************************************************************");
}

function porPantalla(numero1, numero2){
    document.write("Suma: " + (numero1+numero2));
    document.write("Resta: " + (numero1-numero2));
    document.write("Multiplicación: " + (numero1*numero2));
    document.write("División: " + (numero1/numero2));
    document.write("***************************************************************");
}

function calculadora(numero1, numero2, mostrar = false){
    if(!mostrar){
        porConsola(numero1, numero2);
    } else{
        porPantalla(numero1, numero2);
    }
    return true;
}

calculadora(12, 8);
calculadora(12, 8, true);

/*
for(var i = 1; i<= 10; i++){
    calculadora(i, 8);
}
*/