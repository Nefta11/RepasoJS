//Una matris es un arreglo pero de 2 dimenciones

//sintaxis let<nombre-matriz>[[],[]]
// indices (renglon, columna)



//Declaracion de una matriz

let matriz = [[],[]];

//Modificar los valores 
//Renglon0
matriz[0][0]=100;
matriz[0][1]=200;
matriz[0][2]=300;

//Renglon 1
matriz[1][0]=400;
matriz[1][1]=500;
matriz[1][2]=600;

//Leer los valores

console.log(`Elemento [0],[0] = ${matriz[0][0]}`) 
console.log(`Elemento [0],[1] = ${matriz[0][1]}`) 
console.log(`Elemento [0],[2] = ${matriz[0][2]}`) 

console.log(`Elemento [1],[0] = ${matriz[1][0]}`) 
console.log(`Elemento [1],[1] = ${matriz[1][1]}`) 
console.log(`Elemento [2],[1] = ${matriz[1][2]}`) 




//Sintaxis simplificada de una matriz

let nuevaMatriz =[[1,2,3],[4,5,6]]

console.log(`Elemento [0],[1] = ${nuevaMatriz[0][1]}`) 
console.log(`Elemento [2],[1] = ${nuevaMatriz[1][2]}`) 
console.log(`Elemento [2],[1] = ${nuevaMatriz[1][0]}`)
