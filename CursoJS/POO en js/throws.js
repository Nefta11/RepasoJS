// Uso de throws
"use strict"
let resultado =-44;

try {
    //x=10;
    if ( isNaN(resultado)) throw "No es un numero";
    else if(resultado === " ")throw "Es una cadena vacia";
    else if(resultado >= 0) throw "Es valor positivo";
    else if (resultado < 0)throw "Valor negativo"
} catch (error) {
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log("Revision terminada")
}