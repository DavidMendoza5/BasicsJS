'use strict'
// JavaScript Object Notation 

window.addEventListener('load', function() {
    var pelicula = {
        title: 'Batman vs Superman',
        year: 2016,
        country: 'United States'
    };
    
    var peliculas = [
        {title: 'Jo Jo Rabbit', year: 2020, country: 'United States'},
        pelicula
    ];
    
    var caja_peliculas = document.querySelector("#peliculas");
    
    for(var index in peliculas) {
        var p = document.createElement("p");
        
        p.append(peliculas[index].title + " - " + peliculas[index].year);

        caja_peliculas.append(p);
    };
    
    console.log(peliculas);
});

