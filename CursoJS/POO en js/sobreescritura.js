//Sobreescritura en js

class Empleado {

    constructor(nombre, sueldo){
        this.nombre=nombre;
        this.sueldo=sueldo;
    }
    //Buena practica siempre realizar los metodos get y set de las clases
        obtenerDetalles(){
            return `Empleado: ${this.nombre}, sueldo: ${this.sueldo}`
        }

}

class Gerente extends Empleado{
     constructor(nombre,sueldo,departamento){
        super(nombre,sueldo)//llamada al constructor de la clase padre
        this.departamento=departamento;
     }

     obtenerDetalles(){
        return super.obtenerDetalles() + " - "+ this.departamento;
     }
}

//Ejemplo de polimorfismo
function determinarTipoObjetc(tipo){
console.log(    tipo.obtenerDetalles())
    //Mulriples formas en la que se puede llamar un metodo
    //Ya que el metodo obtenerDetalles() viene desde la clase padre Empleado pero es sobreescrita en la clase hija
    //Por lo que dependiendo el tipo sera la forma en que se mande a llama al metodo

    //Ahora utilizaremos la palabra instance OF
    if(tipo instanceof Gerente){
        console.log("Es un objeto del tipo gerente")
        console.log(tipo.departamento)
    }
    else if(tipo instanceof Empleado){
        console.log("Es un tipo Empleado")
    }
    else if (tipo instanceof Object){// La clase object es la clase padre de todas las clases en js
        console.log("Es un tipo object")
    }
}

let gerente1= new Gerente("Neftali",27880, "Software")
let empleado = new Empleado ("Janteh", "Amiztlan")

console.log(gerente1.obtenerDetalles())

determinarTipoObjetc(empleado)
determinarTipoObjetc (gerente1)