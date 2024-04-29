//Arreglos en js

let numerosArray = [];

//Modificar valores de nuestro arreglos

numerosArray[0]=13;
numerosArray[1]=21;
numerosArray[4]='Hola Siuu'

//Leer los valores del arreglo
console.log(`Elemento 1 - [0]: ${numerosArray[0]}`)
console.log(`Elemento 2 - [2]: ${numerosArray[2]}`)
console.log(`Elemento 4 - [0]: ${numerosArray[4]}`)


//Arreglo declarado yaa

let numerosArreglo = [12,11,155,0,0]

console.log(`Elemento 1 - [0]: ${numerosArreglo[0]}`)
console.log(`Elemento 2 - [2]: ${numerosArreglo[2]}`)
console.log(`Elemento 4 - [0]: ${numerosArreglo[4]}`)


//Iterar elementos de un arreglo

for (let i =0; i < numerosArreglo.length; i++){
console.log(numerosArreglo[i])
console.log(`Arreglo[${i}] = ${numerosArreglo[i]}`)
}