// Una clase es un plantilla que posee los atributos y metodos

// Un objeto es una instancia de esa clase y esta posee un nombree etc osea contiene los valores 

class Persona {
    constructor(nombre, apellido){
        this._nombre= nombre;
        this._apellido=apellido;

    }

    get nombre(){ // Creacion de un metodo get
        return this._nombre
    }

    set nombre(nombre){ // Creacion de un metodo set para modificar el valor de nombre
        this._nombre = nombre;
    }
}

let persona1 = new Persona("Neftali","Vergara");
console.log(persona1)

console.log(persona1.nombre)//Mnada a llamar el metodo get
persona1.nombre= "Neftali Arturo";
console.log(persona1.nombre)

let persona2 = new Persona ("Janeth", "Amixtlan")
console.log(persona2)