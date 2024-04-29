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
