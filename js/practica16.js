/*Practica 16 */
/*IMPORTS Y EXPORTS DE JAVA SCRIPT */

/*Creamos una función de validación para el logeo del usuario */
console.warn("Practica 16: Creamos una función de validación para el logeo del usuario")

function validaUsuario(usr,pass)
{
//sera sustituido por una conexion a bd para checar las credenciales de los usuarios

let estatusLogeo = false
if(usr==="Nefta" && pass==="1234")
return estatusLogeo= true;

else 
return estatusLogeo=false;
}

export default validaUsuario

