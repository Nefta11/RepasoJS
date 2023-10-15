/* Practica 10: FFunciones Anónimas o flecha en JavaScript(Arrow Functions)*/
console.warn("---PRACTICA 10: Funciones Anónimas o flecha en JavaScript(Arrow Functions)")

console.log("%c1-FUNCIONES FLECHA ","background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")

const saludo = () => console.log ("Hola, que tal")

console.log("Saludando desde una funcón anonima....")
saludo();
console.log("He terminado de saludar.")

/*Una función que reciba variables */

const SaludoVariables = (nombre, hora = new Date()) =>
{
let horas = hora.getHours() //ESTA FUNCION ESTA CONVIRTIENDO A FORMATO 24 HRS

    if(nombre === undefined)
        return `No se ha definido el nombre de la persona a saludar, por favor
    verifica el llamado de la función`
    else{
    if(horas>=6 && horas<12)
        return `Buenos días, ${nombre}`
    else if (horas>=12 && horas <=19)
    return `Buenas tardes, ${nombre}`
    else 
    return `Buenas noches, ${nombre}`
    }
}

console.log(`El resultado de la función es ${SaludoVariables("Neftali hdz")}`)
console.log(`El resultado de la función es ${SaludoVariables("Leslie", new Date (`September 19, 2023 20:05:00`))}`)
console.log(`El resultado de la función es ${SaludoVariables("Bartolomeo", new Date (`August, 2021 13:05:00`))}`)
console.log(`El resultado de la función es ${SaludoVariables("Javier", new Date (`August, 2021 06:05:00`))}`)

