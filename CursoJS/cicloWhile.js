// ciclo while

//imprimir los valores de 0 a 100

let contador = 0, repeticion = 5 ;

while(contador <= repeticion){
console.log(contador++);

//contador++;
}




//// ciclo do while
// primero se ejecuta el codigo por lo menos una vez y despues de verifica la condicion

let contador1 = 0, repeticion1 = 5 ;
do{

    console.log(contador1++);

}while(contador1 <= repeticion1)



//////Ciclo for

let repe = 5;
for(let conta =1; conta <= repe; conta++){
console.log(conta)
}



//Ejerecicio Imprimir 10 numeros de 3 en 3 

let max = 10, min = -10;

console.log('Numeros del 3 al 10')
for(let contar = 1; contar <= max; contar+=3){
console.log(contar)
}


console.log('Numeros del 1 al -11')
for(let cont =1; cont >= min; cont-=3){
    console.log(cont)
}



//Ejercicio Acumulador suma

console.log('Realizar la suma de los primeros 5 números utilizando un ciclo for;')
let maximo = 5, suma = 0;
for (let numero = 1; numero <= maximo; numero++) {
//Imprimimos lo que se va asumar
console.log(`${suma} + ${numero}`)
    suma+=numero
    console.log(suma)
}
console.log(`La suma de los numero 1 + 2 + 3 + 4 + 5 es = ${suma}`)