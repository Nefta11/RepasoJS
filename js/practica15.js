/* ---PRACTICA 15: Agregando nuevos elementos al dom*/

import medejasEntrar from './practica16.js'

console.warn("---PRACTICA 15: Agregando nuevos elementos al DOM ")

console.log("%c1.Agregando un mensaje de error ", "background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")


const alerta = document.createElement("DIV")
alerta.classList.add("alerta")

formulario.addEventListener(`submit`, e => 
{
e.preventDefault();
console.log("Enviaste los datos del formulario....")

const nombreUsuario = document.querySelector("#nombre")
console.log(`El usuario que esta intentando logearse es : ${nombreUsuario.value}`)

const passwordUsuario = document.querySelector("#password")
console.log(`El Password ingresado es : ${passwordUsuario.value}`)


if(nombreUsuario.value === '' || passwordUsuario.value === '')
{
alerta.textContent = "Los datos para validación del usuario son incorrectos"
alerta.classList.add("error")
}
else {
alerta.textContent="Ambos campos fueron llenados y puede proceder "  
alerta.classList.add("exito")

}
//if(nombreUsuario.value == '' || passwordUsuario.value === '')
//alert("Los datos para realizar la validación del usuario esta incompleto")
//else 
//alert("Ambos campos fueron llenados y puede proceder a validar la información")
formulario.appendChild(alerta)

const selogeo= medejasEntrar(nombreUsuario.value, passwordUsuario.value);

console.log(selogeo)

selogeo? console.log("Bienvenid@ has logeado exitosamente"): console.log("Hay un error en las credenciales, por favor verifica tus datos")

})

/*RETO MENSAJES DE ERROR QUE APARESCAN SOLO UNO */

//////////////////////////////////////////////////////////////


