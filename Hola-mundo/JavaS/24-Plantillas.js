'use strict'

//Las comillas invertidas nos permiten meter textos grandes sin necesidad de estarlos concatenando

var name = prompt("What's your name?  ");
var last_name = prompt("What's your last name? ");

var text = `
    <h1>Hola </h1>
    <h3>Mi nombre es ${ name }</h3>
    <h3>Mi apellido es ${ last_name }</h3>
`;
//Al agregar ek signo $ estamos interpolando, es decir, estamos agregando el valor de la variable

document.write(text);