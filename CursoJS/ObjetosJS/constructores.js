//Constructores 
//Funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido
    }
}

let padre = new Persona("Arturo", "Bartolo","artbar@gmail.com");
console.log(padre)
console.log(padre.nombreCompleto())

let madre = new Persona("Rosario", "Vergara", "Chayo@gmail.com") ;
console.log(madre)
console.log(madre.nombreCompleto())


let hijo = new Persona ("Neftali", "Vergara", "neftaliarturohernandez@gmail.com");
console.log(hijo)
console.log(hijo.nombreCompleto())



padre.apellido="Hernandez"

console.log(padre)

