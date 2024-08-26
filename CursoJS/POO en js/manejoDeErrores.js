//Manjeo de errores en js

"use strict"

// ejemplo de uso de try

try {
    mifuncion()
    x = 10;
} catch (error) {
    console.log(error)
}
finally{
    console.log("Termina larevision de errores")
} // finally siempre se ejecuta es opcional
console.log("continuamos...")

//En este ejmplo podemos ver que al usar el modo estricto de js no nos deja utilizar una variables sin antes haberla declarado
//por lo que usamos el try, catch 

