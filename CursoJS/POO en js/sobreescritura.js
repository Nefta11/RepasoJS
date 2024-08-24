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
function imprimir(tipo){
console.log(    tipo.obtenerDetalles())
    //Mulriples formas en la que se puede llamar un metodo
    //Ya que el metodo obtenerDetalles() viene desde la clase padre Empleado pero es sobreescrita en la clase hija
    //Por lo que dependiendo el tipo sera la forma en que se mande a llama al metodo

}

let gerente1= new Gerente("Neftali",27880, "Software")
let empleado = new Empleado ("Janteh", "Amiztlan")

console.log(gerente1.obtenerDetalles())

imprimir(empleado)
imprimir (gerente1)