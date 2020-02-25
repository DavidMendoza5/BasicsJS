'use strict'

// Fetch (ajax) y peticiones a servicios / api rest

var div_usuarios = document.querySelector("#usuarios");
var div_usuario = document.querySelector("#usuario");


getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuario(users.data);
        return getUsuario();
    })
    .then(data => data.json())
    .then(user => {
        mostrarUsuario(user.data);
        return getInfo();
    })
    .then(data => {
        console.log(data);
    })

function getUsuarios() {
    return fetch('https://reqres.in/api/users')
    //return fetch('http://localhost:3800/api/obtenerDocentes')
}

function getUsuario() {
    return fetch('https://reqres.in/api/users/2')
    //return fetch('http://localhost:3800/api/obtenerDocentes')
}

function listadoUsuario(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');

        nombre.innerHTML = i + user.first_name + user.last_name;

        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none';
    }); // Es lo mismo que el for each
}

function mostrarUsuario(user) {
    console.log(user);

    let nombre = document.createElement('h3');
    let avatar = document.createElement('img');

    nombre.innerHTML = user.first_name + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100'; 

    div_usuario.appendChild(nombre);
    div_usuario.appendChild(avatar);

    /*
   //let datos = document.createElement('h3');
   //datos.innerHTML = user.data;
   div_usuario.appendChild(datos);
    */
    document.querySelector(".loading").style.display = 'none';
}

function getInfo() {
    var profesor = {
        nombre: 'Pepe',
        apellidos: 'Mina Simpson'
    }

    return new Promise((resolve, reject) => {
        var profesor_string = JSON.stringify(profesor);

        if(typeof profesor_string != 'string') return reject('Error');
        
        return resolve(profesor_string);
    })
}
