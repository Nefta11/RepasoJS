// Herencia en js

class Persona {

    constructor(nombre, apellido){
        this._nombre=nombre;
        this._apellido= apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre= nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre+ " "+ this._apellido;
    }
}


class Empleado extends Persona {

    constructor(nombre, apellido, departamento){
        super(nombre,apellido);
            this._departamento= departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
    

//sOBREESCRITURA EN JAVA SCRIPT
//MODIFICAR EL COMPORTAMIENDTO DE ALGUN METODO DEFINIDO DE LA CLASE PADRE 
           //Sobreescritura
        nombreCompleto(){
            return super.nombreCompleto()+" "+this._departamento;
        }
}

let persona1 = new Persona ('Neftali', 'Vergara')
console.log(persona1)

let Empleado1 = new Empleado ("Jorge", "Sayayin", "Ventas Piso")
console.log(Empleado1)
console.log(Empleado1.nombreCompleto()) // Aqui Heredamos metodos de la clase padre