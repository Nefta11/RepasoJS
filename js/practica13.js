/* ---PRACTICA 13: Manipulacion del DOM*/
console.warn("---PRACTICA 13: Manipulación del DOM ")

console.log("%c1. Accediendo a los elementos del DOM", "background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")
console.log("%c1.1 A través de queySelector()", "background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")
/* QUERYSELECTOR es un método que incluido de manera automática por el
 interpretador de JS, el cual permite buscar y acceder a cada elemento
 declarado por el maquetador web, devolviendo solo el primer elemento encontrado*/

console.log("Buscando y accediendo al primer <H2>")
const encabezado = document.querySelector("H2")
console.log(encabezado)

//BUSCANDO UN ELEMENTO QUE NO EXISTE ////////////////////////////////////////////////////////////////////////
const primerH3= document.querySelector("H3")
console.log("BUScando y accediendo al primer elemento H3")
console.log(primerH3)//Regresa NULL por que no existe este elemento el DOM ACTUAL
console.log(typeof primerH3)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let estiquetash4= document.querySelectorAll("H4");
console.log("Buscando y accedediendo a todos los elementos con H4")
console.log(estiquetash4);
console.log(typeof estiquetash4)
///////////////////////////////////////////////////////////////////////////////////////77
let estiquetash1= document.querySelectorAll("H1")
console.log("Buscando y accediendo a las etiquetas con h1")
console.log(estiquetash1)
console.log(typeof estiquetash1)




console.log("Buscando y accediendo al primer <INPUT SUBMIT>")
let boton = document.querySelector("input")
console.log(boton)

/*RETO ENCONTRA EL INPUT SUBMMIT */
console.log("RETO ENCONTRA EL INPUT SUBMMIT")
const reto = document.querySelector("#reto")//gato para buscar por ID
console.log(reto)


console.log("Buscando y accediendo a elemento por CLASS Tecnologias")
const elementoclase = document.querySelector(".tecnologias")// PUNTO PARA BUSCAR POR CLASES
console.log(typeof elementoclase)//typeof se utiliza para que te muestre que tipo de dato es en este caso es un objeto

console.log("¿ Que tipo de dato devuelve querySector")
console.log(`El encabezado es un: ${typeof encabezado}`)
console.log(`El Boton es un: ${typeof boton}`)
console.log(`El elementoClase es un: ${typeof elementoclase}`)

console.log("%c1.2 A través de querySelectorALL()", "background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")
/*QuerySelector este método permite buscar y retornar todos los elementos que 
coincidan con el filtro determinado (TAG, ID o CLASE) */

const ligas = document.querySelectorAll("a")
console.log("Buscando y accediendo a los elementos con TAG -<A>")
console.log(ligas)
console.log(typeof ligas)


const elemento1 = document.querySelectorAll("#elemento1")
console.log("Buscando y accediendo a los elementos POR ID- elemento 1")
console.log(elemento1)
console.log(typeof elemento1)



const patito = document.querySelectorAll(".patito")
console.log("Buscando y accediendo a los elementos POR CLASS- elemento patito")
console.log(patito)
console.log(typeof patito)


console.log("%c2. Accediendo a las propiedades de los elementos DOM ", "background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")
console.log(encabezado)
console.log(`El elemento extraido del DOM es un : ${encabezado.tagName}`);
console.log(`El elemento extraido del DOM tiene el texto : ${encabezado.textContent}`);

console.log(`El elemento extraido del DOM tiene las clases : ${encabezado.classList}`);

console.log(`El elemento <HEADER> extraido del DOM tiene las clases : ${document.querySelectorAll("header").classList}`);

//console.log(`El elemento <DIV> extraido del DOM tiene las clases : ${document.querySelectorAll("").classList}`);


console.log(`¿Pero que pasa cuando intento acceder a los elementos de obtenidos por
querySelectorAll()`);
console.log(`De los elementos extraidos del DOM en la variable : ligas, son un : ${ligas.tagName}`);/*Esto no es permitido por que es un arreglo */
console.log(`De los elementos extraidos del DOM en la variable ligas, tiene el texto : ${ligas.textContent}`);
console.log(`De los elementos extraidos del DOM en la variable : ligas, tienen los estilos : ${ligas.classList}`);

//QUERYSELECTOR () => REGRESA OBJETO INDIVIDUAL
//querySelectorAll

ligas.forEach((elemento, i) => console.log (`Los elementos extraidos del DOM
en la variable: ligas [${i}], es un ${elemento.tagName}`))


elemento1.forEach((elemento, i) => console.log (`Los elementos extraidos del DOM
en la variable: elemento1 [${i}], es un ${elemento.tagName}`))


patito.forEach((elemento, i) => console.log (`Los elementos extraidos del DOM
en la variable: elementosPatito [${i}], es un ${elemento.tagName}`))


console.log("%c3.Modificando los valores de los atributos de los objetos del DOM  ", "background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")
console.log(encabezado)


console.log(`Modificando el texto que el maquetador puso de :${encabezado.textContent},a modificando los elementos del DOM ${(encabezado.textContent
    ="Modificando los elementos del DOM")}`);

//CAMBIAR EL TEXTO DEL ENLACE2 A GOOGLE

ligas[2].textContent="Google.com"
reto.setAttribute(`disabled`,``)
reto.setAttribute(`style`, `background-color: orange; font-style:italic `)//SE LE CAMBIA EL COLOR A EL BOTON DE LOGIN DESDE DOM
console.log(reto)

document.getElementById('password').addEventListener('input', function() {

    this.value = '♥'.repeat(this.value.length);
  });
  


