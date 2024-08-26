//Funcion setInterval en js ------------------------------------------------------

let reloj = ()=>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

setInterval(reloj,1000)

//MANDA A LLAMAR CADA SEGUNDO LA HORA DE MANERA ASINCRONA SIUUU