/* Practica 9: Funciones en JavaScript (Function Expression)*/
console.warn("---PRACTICA 09: Funciones en JavaScript (Function Expression)")
console.log("%c1- Utilizando Function expresion","background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")



/*Para declrarar este tipo de funciones debemos asignar la declaración de las funcion a una variable */

const suamr = function (a=0, b=0){
    console.log (a+b)
    return (a+b)
}

console.log(`El resultado de la suma de: 8 + 4 es = ${suamr(4,8)}`)


console.log("%c1- RETO FUNCIÓN DE VOCALES:","background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")

/*RETO FUNCIÓN DE VOCALES: */
//Crear una funcion que dada una palabra te estraiga todas las vocales de la misma sin importar que estas se repitan
const vocalesExtraidas = function(palabra) {
    let vocales = 'aeiouAEIOU';
    let result = '';

    for(let letra of palabra) {
        if(vocales.includes(letra)) {
            result += letra;
        }
    }

    return result;
}
let palabra="Neftali"
console.log(`Las vocales extraidas de la palabra ${palabra} Son:`);
console.log(vocalesExtraidas(palabra))

