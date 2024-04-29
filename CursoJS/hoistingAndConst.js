// Hoisting
//Signica que podemos primero definir una variavle y despues utilizarla

//Ejemplo

x = 90; //2. Inicializamos la variable
console.log(x);
var x; //1. declarar

// solo funciona con la declaracion var
// y eso no es recomendable y por eso con let no aplica el concepto

// Una constante es un tipo de declaracion de variable en la cual le asignamos un valor
// a nuestra variable pero esta ya no podra cambiar de valor durante la ejecucion del programa

//ejemplo de constante

console.log(Math.PI);

// Para la declararcion de una constante como buena practica debe de ser en mayusculas y si es de mas de dos palabras
// se puede utilizar _
// EJEMPLO

const MI_NOMBRE = "Neftali";

console.log(MI_NOMBRE);
