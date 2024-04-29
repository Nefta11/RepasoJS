//Cadenas y funciones
// cadenas inmutables en js (no se puede modificar su valor)


function cambiarValor(parametro){
    parametro ='Adios';
}

//LLamamos a la funcion
let argumento = "Holaa";
console.log(`Antes de la funcion: ${argumento}`)

cambiarValor(argumento)
console.log(`despues de la funcion: ${argumento}`)



//Alcance de las variables en JS
// Tiempo de duracion de una variable a la hora de la ejecucion de nuestro programa

//Definir variable

let variableGlobal = 5;

//modificae el valor
variableGlobal = 17;

//Definicion Funcion
function miFuncion(variablelocal){
    console.log(variablelocal);

    //modificamos la variable global
variableGlobal = 33;
//No podemos redefinir una varibale global (let)
}
miFuncion(variableGlobal);