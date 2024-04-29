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

numero =5, acumulador=0;
for(let contador = 1; contador <=numero; contador++){
    acumulador+=numero
console.log(acumulador)
}