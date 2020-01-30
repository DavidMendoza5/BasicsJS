'use stric'

window.addEventListener('load', function() {
    var formulario = document.querySelector("#form_peliculas");
    formulario.addEventListener('submit', function(){
        var titulo = document.querySelector("#add_pelicula").value;
        
        if(titulo.length >= 1) {
            localStorage.setItem(titulo, titulo);
        }
    });

    var ul = document.querySelector("#peliculas_lista");

    for(var i in localStorage) {
        if(typeof localStorage[i] == 'string') {
            var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);
        }
    }

    var formularioborrar = document.querySelector("#form_borrar_peliculas");
    formularioborrar.addEventListener('submit', function(){
        var titulo = document.querySelector("#borrar_pelicula").value;
        
        if(titulo.length >= 1) {
            localStorage.removeItem(titulo);
        }
    });
});