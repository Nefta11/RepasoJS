//Funciones incorporadas en js

//Obtener el largo de una cadena

let cadena1='Siuuu'
console.log(cadena1.length)

// No podemos modificar una cadena en JS
//Las cadenas son inmutables

cadena1[0]='X'
console.log(cadena1)


//Si podemos asignar una nueva cadena

cadena1 = 'Adios'
console.log(cadena1)

//Recorrer cada caracter
for(let i=0; i< cadena1.length; i++){
    console.log(`${i} - ${cadena1[i]}`)
}