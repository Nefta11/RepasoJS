//Operadores logicos

let a = true;
let b = false;

console.log(a);
console.log(b);


//Operador logico && (and o Y)
//Regresa verdadero si ambos operandos son verdaderos
console.log(`${a} && ${b} -> ${a && b}`)

//OPerador logico || (or o O)
//Regresa verdadero si cualquiera de los valores es verdadero
console.log(`${a} || ${b} -> ${a || b}`)

//Operador ! (not o No)
// Invierte el valor original, true-> false, false -> true
console.log(`${a} -> ${!a}`)


//Ejercicio de practica

//Definimos variables de ejemplo
let minimo = 0, maximo = 5;

//valor para saber si esta dentro de rango

let dato = 3;

let dentroRango = dato >= minimo && dato <= maximo;
console.log("Valor dentro rango :", dentroRango)