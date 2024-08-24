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

let gerente1= new Gerente("Neftali",27880, "Software")

console.log(gerente1.obtenerDetalles())