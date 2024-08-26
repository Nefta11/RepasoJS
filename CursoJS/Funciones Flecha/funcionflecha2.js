

const miFuncionFlecha = ()=> console.log("Siuuuu")

miFuncionFlecha()//Ejemplo del llamado de la funcion en una sola linea sin abrir el cuerpo de la misma


const Saludar =  () =>{
return "Saludos desde funcion flecha"
}

console.log(Saludar())

//ejemplo en una sola linea 
const Saludar2 = () => "Hola putos"
console.log(Saludar2())

//ejemplo con el retorno de un objeto
const regresarObjeto = ()=>({nombre: "Neftali The king", apellido:"Hernandez"});
console.log(regresarObjeto())

//funcion flecha con parametros
const funcionConParametros = mensaje=>console.log(mensaje) //con un argumento podemos quitar los parentecis
funcionConParametros("Holaa amor");

//funcion con varios parametros
const funcionConVariosParametros =(op1,op2)=> {
    let resultado = op1 + op2
    return resultado};
console.log(funcionConVariosParametros(3,5))