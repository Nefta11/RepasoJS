//Funciones en JS
// Una función es un bloque de codigo reutilizable, que realiza una tarea en particular
//Puede tener valores de entrada como de salida estos son opcionales

//Tipos de funciones

// Funciones definidas por el usuario

/// Funciones Incorporadas (Fun de cadenas de caracteres , Funciones Matematicas)

////Eje,plo de procedimiento en JS
//1.Definir procedimiento

function saludar(mensaje) {
  //Cuerpo  de la funcion
  console.log(`Mensaje: ${mensaje}`);
}
//2. Llamar el procediemiento
saludar("Holaa Bobos Siuuu");

//Ejemplo de funciones JS

//1. Declarar la funci

function suma(a, b) {
  let resultado = a + b;
  return resultado;
}
let argA = 6;
argB = 8;

let resultado = suma(argA, argB);
console.log(`Resultado de la suma ${argA} + ${argB} = ${resultado}`);

//Paso por valor en js
//Aplica cuando estamos pasando informacion de tipo primitivo (number, bool, string)

function cambiarValor(parametro) {
  parametro = 20;
}

let argumento = 10;
cambiarValor(argumento);
console.log(argumento);

//Ejmplo paso por referencia en js

//Onjeto (array) se pasan por referencia

function editarValor(param) {
  param[0] = 20;
}

//Llamamos a la funcion

let arreglo = [10];
console.log(`Antes funcion : ${arreglo[0]}`);
editarValor(arreglo);

console.log(`Despues funcion: ${arreglo[0]}`);
