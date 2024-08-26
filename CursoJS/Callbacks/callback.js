//Una funcion del tipo callbacks es un funcion que se pasa como parametro a otra funcion 
// dentro de una funcion podemos mandar a llamar otra funcion
// recibiendo como argumento esa funcin


function miFuncion(){
    console.log("Funcion 1")
}

function miFuncion2(){
    console.log("Mi funcion2")
}


miFuncion2()
miFuncion()
//se ejecutan de manera secuencial en js



// Funciones de tipo callbacks

function imprimir(mensaje){
    console.log(mensaje)
}

function sumar(op1,op2, imprimir){
    let resultado = op1 + op2
    imprimir(`resultado: ${resultado}`)
}

sumar(11,7,imprimir);

//Llamadas asincronas con uso de setTimeOut

function miFuncionCallback(){
    console.log("Saludo asincrono despues de 3 segundos")
}

setTimeout(miFuncionCallback, 3000);//Despues de 3 segundos

setTimeout(function(){console.log("saludo asincrono 2")},4000)//pasando la funcion como parametros

setTimeout(()=>console.log("saludo asincrono 3"), 1000)

//De esta manera se utiliza el setTimeOut