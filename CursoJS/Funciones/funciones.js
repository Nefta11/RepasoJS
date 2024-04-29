//Funciones en JS
// Una función es un bloque de codigo reutilizable, que realiza una tarea en particular
//Puede tener valores de entrada como de salida estos son opcionales


//Tipos de funciones

// Funciones definidas por el usuario

/// Funciones Incorporadas (Fun de cadenas de caracteres , Funciones Matematicas)



////Eje,plo de procedimiento en JS
//1.Definir procedimiento

function saludar(mensaje){
    //Cuerpo  de la funcion
console.log(`Mensaje: ${mensaje}`)

}
//2. Llamar el procediemiento
saludar('Holaa Bobos Siuuu')


//Ejemplo de funciones JS

//1. Declarar la funci

function suma(a,b){
    let resultado = a + b;
    return resultado
}
let argA = 6; argB = 8;

let resultado=suma(argA, argB)
console.log(`Resultado de la suma ${argA} + ${argB} = ${resultado}`)