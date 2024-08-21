//Constructores 
//Funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona("Arturo", "Bartolo","artbar@gmail.com");
console.log(padre)

let madre = new Persona("Rosario", "Vergara", "Chayo@gmail.com") ;
console.log(madre)

let hijo = new Persona ("Neftali", "Vergara", "neftaliarturohernandez@gmail.com");
console.log(hijo)

padre.apellido="Hernandez"

console.log(padre)