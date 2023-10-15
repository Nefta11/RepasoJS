/* ---PRACTICA 13: Eventos del DOM*/
console.warn("---PRACTICA 14: Eventos del DOM ")

console.log("%c1. ", "background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")


//const heading = document.querySelector(`#reto`)

//heading.addEventListener(`click`, () => alert("Le diste click a boton ...."))


const heading2 = document.querySelector(`h1`)

heading2.addEventListener(`click`, () => console.log("Le diste click al H1 ...."))


//Function declaration
//Function XphathExpression
//arrow or anonymous Function 

//RETO EVENTOS CUANDO DE CLICK AL ENLACE UNO ME SALUDE DEPENDIENDO LA HORA DEL DIA 
const enlace = document.querySelector('#uno');

function saludarHora(persona) {
    const horaActual = new Date();
    const horas = horaActual.getHours();
    let saludo;

    if (horas >= 6 && horas < 12) {
        saludo = 'Holaa Buenos Días';
    } else if (horas >= 12 && horas < 19) {
        saludo = 'Holaa Buenas Tardes';
    } else {
        saludo = 'Holaa Buenas Noches';
    }

    let mensaje = `${saludo}, ${persona}. La hora es ${horas}:${horaActual.getMinutes()}:${horaActual.getSeconds()}.`;

    console.log(mensaje)
    alert(mensaje);
}

enlace.addEventListener('click', () => { saludarHora('Profe Marco'); });



// Reto con function expressin
// Al darle click al enlace 4, mostrar la raiz cuadrada
const enlace4 = document.querySelector('#cuatro');

function mostrarRaizCuadrada() {
    let numero = 81;
    let raizCuadrada = Math.sqrt(numero);
    alert(`La raíz cuadrada de ${numero} es ${raizCuadrada}`);
    console.log(`La raíz cuadrada de ${numero} es ${raizCuadrada}`);
}

enlace4.addEventListener('click', mostrarRaizCuadrada);

console.log("%c1. Agregando un evento -Submit ", "background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")


formulario.addEventListener("submit", e => {
    e.preventDefault();
    console.log("Enviaste los datos del formulario....")

    const nombreUsuario = document.querySelector("#nombre")
    console.log(`El usuario que esta intentando logearse es : ${nombreUsuario.value}`)

    const passwordUsuario = document.querySelector("#password")
    console.log(`El Password ingresado es : ${passwordUsuario.value}`)

    if (nombreUsuario.value == '' || passwordUsuario.value === '')
        console.log("Los datos para realizar la validación del usuario esta incompleto")
    else
        console.log("Ambos campos fueron llenados y puede proceder a validar la información")

})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("%cEvento 'input' en el campo de Nombre:", "background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

const nombreUsuarioIn = document.querySelector("#nombre");

nombreUsuarioIn.addEventListener('input', (event) => {
  const contenidoInput = event.target.value;
  console.log('Texto introducido en el campo de Nombre:', contenidoInput);
});

console.log("%cEvento 'paste' en el campo de contraseña:", "background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");
const contraseñaUsuario = document.querySelector("#password");

contraseñaUsuario.addEventListener('paste', (event) => {
  const contenidoPegado = event.clipboardData.getData('text');
  console.log('Contenido pegado en el campo de Contraseña:', contenidoPegado);
});


console.log("%cEvento 'copy' en el elemento con class 'react':", "background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

const elementoReact = document.querySelector(".react");

elementoReact.addEventListener('copy', () => {
  alert('Contenido copiado en el elemento con class "react".');
});





