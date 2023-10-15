/* Práctica 18: Multiples peticiones a un API */

const style = 'background: linear-gradient(to right, #FF3333, #262626); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5)'
const style2 = 'background: linear-gradient(to right, #0F3EEE, #000); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5)'
const style3 = 'background: linear-gradient(to right, #EE0FB5, #FFF); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5)'

console.warn("---- Practica 18: Multiples peticiones a un API ----");

const endpointPostsURL = "https://jsonplaceholder.typicode.com/comments"
const endpointPhotosURL = "https://jsonplaceholder.typicode.com/photos"


//Promises


const consultaAPI_Posts = async() =>
{
    const respuestaPosts = await fetch(endpointPostsURL) 
     console.log("He regresado con los datos de los Posts...")
    const resultadoPosts = await respuestaPosts.json() // Esto le da formato de JSON al objeto resultante de la API
    console.log("Ya covertí los resultados de los Posts en formato JSON")
    resultadoPosts.forEach(post => console.log(post))
    console.log("He terminado de imprimir los resultados de los Posts devueltos por la API.")*/
}



const consultaAPI_Photos = async() =>
{
    const respuestaPhotos = await fetch(endpointPhotosURL) 
     console.log("He regresado con los datos de las PHOTOS...")
    const resultadoPhotos = await respuestaPhotos.json() // Esto le da formato de JSON al objeto resultante de la API
    console.log("Ya covertí los resultados de las Photos en formato JSON")
    resultadoPhotos.forEach(post => console.log(photos))
    console.log("He terminado de imprimir los resultados de las Photos devueltos por API.")*/
}


const consulta_Paralela_API = async() =>
{
    const [respuestaPost2, respuestaPhotos2] = await Promise.all ([fetch 
    (endpointPostsURL), fetch(endpointPhotosURL)]);// ESO PERMITE QUE SE AGAN VARIOS METODOS AL MISMO TIEMP+O

    const resultadoPosts = await respuestaPost2.json()
    const resultadoPhotos = await respuestaPhotos2.json()

    console.log(resultadoPosts)
    console.log(resultadoPhotos)
}


const llamadoSERIE = async() => {
const inicio = performance.now()
console.log( "%c. Iniciando los llamados en SERIE", style2);
console.log( "%c. Consultando los POSTS", style2);
await consultaAPI_Posts();
console.log( "%c. Consultando las PHOTOS", style2);
await consultaAPI_Photos();
const fin = performance.now()
console.log(`Llamado en SERIE ${fin-inicio} ms.`)
}

const llamadoPARALELO = () =>
{
    const inicio = performance.now()
    console.log("%c. Iniciando los llamados en PARALELO", style3)
    console.log("%c. Consultando los POSTS y PHOTOS al mismo tiempo", style3)
    consulta_Paralela_API()
    const fin = performance.now()
    console.log(`Llamado en SERIE ${fin-inicio} ms.`)
}

llamadoSERIE()
llamadoPARALELO()