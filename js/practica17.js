/*Practica 17: consumo de un API en java script */ 
//
const edpointURL ="https://jsonplaceholder.typicode.com/comments"

//PROMISES

console.log("%c1. Utilizando promesas (promises)", "background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")


console.log("Solicitando los datos de la API")


const consultaAPI_Promesas= () =>{
fetch(edpointURL)
    .then((respuesta)=> {
        return respuesta.json()
    })

    .then((respuesta)=> {
        respuesta.forEach((elemento,i) => 
        {
            console.log(`Post NO. ${i}`)
            console.log(elemento)
        }
        
        )})
}

console.log("%c2. Utilizando Programación Asíncrona (Async/Await)", "background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")

const consultaAPI_Asincrona= async()=>
{


setInterval(console.log("..."),3000);
const respuesta =await fetch(edpointURL)
await console.log("He agregado los datos")
const resultado= await respuesta.json() //LE DA FORMATO DE JSON AL OBJETO RESULTANTE DE LA API
await console.log("Ya convertí los resultados en formato JSON")
resultado.forEach(post => {
    setInterval(console.log(post), 500)
})
 console.log("He terminado de imprimir la información asíncrono...")
}




console.log("Solicitando la información por un metodo Asincrono")
consultaAPI_Asincrona()
