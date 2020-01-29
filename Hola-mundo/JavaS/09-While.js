'use strict'

var year = 2019;

while(year != 2008){
    console.log("Estamos en el año: " + year);

    if(year == 2010){
        break;
    }
    year--;
}

//Do while

var year2 = 18;

do{
    alert("Sólo cuando sea diferente a 20");
    year2++;
} while(year2 != 20)