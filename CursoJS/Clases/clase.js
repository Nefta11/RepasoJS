// Una clase es un plantilla que posee los atributos y metodos

// Un objeto es una instancia de esa clase y esta posee un nombree etc osea contiene los valores 

class Persona {
    constructor(nombre, apellido){
        this.nombre= nombre;
        this.apellido=apellido;

    }

}

let persona1 = new Persona("Neftali","Vergara");
console.log(persona1)

let persona2 = new Persona ("Janeth", "Amixtlan")
console.log(persona2)