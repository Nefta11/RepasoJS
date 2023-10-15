/* ---PRACTICA 12: Sentencias de copntrol*/
console.warn("---PRACTICA 12: Sentencias de control")

console.log("%c1. Sí (IF)","background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")

let mayorEdad = true;

if(mayorEdad == true){
    console.log("Es mayor de edad");
}


console.log("%c2. Sí, además (IF ELSE)","background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")

if(mayorEdad == true)
    console.log("Es mayor de edad");    
else 
    console.log("Es menor de edad");

console.log("%c3. Sí, además (IF - ELSE - IF)","background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")

let persona ={"nombre": "Neftali",
    "edad":23,
    "pais": "MX",
    "mayorEdad": null
}

if (persona.pais == "MX")
    if(persona.edad >= 18)
        persona.mayorEdad=true
    else
        persona.mayorEdad=false
else if (persona.pais =="US")
    if(persona.edad >= 21)
        persona.mayorEdad=true
    else
        persona.mayorEdad=false


    console.log("Los datos del objeto son: ")
    console.table(persona)


console.log("%c4. Operador ternario (? :)","background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")
console.log("Verificando la mayoria de edad usando el operador ternario")

/*Validacion ? si es correcto */

mayorEdad?console.log("Es mayor de edad."):console.log("No es mayor de edad")

persona.pais=="MX"?persona.edad>=18 ? persona.mayorEdad=true:persona.
mayorEdad=false : persona.pais=="US"?persona.edad>=21 ? persona.
mayorEdad=true:persona.mayorEdad=false: undefined

console.log("Los datos del objeto persona son:")
console.table(persona)


/*  Operadores de igualdad

    = Asignar el valor a una variable
    == Comparar la igualdad de dos variables
    === Comparar la igualdad en valor y tipo de dato

*/

console.log(`Creando una variable a y asignandole un valor númerico = 2`)
let a = 2
console.log(`Creando una variable b y asignandole un valor númerico = 2.0`)
let b = 2.0
console.log(`Creando una variable c y asignandole un valor string = 2`)
let c = "2"
console.log("Ya que estan inicializadas empezamos a comparar")
console.log(`Es igual b ? :${a==b?true:false}`)
console.log(`Es igual c ? :${a==c?true:false}`)
console.log(`Es a estrictamente igual c ? :${a===c?true:false}`)

