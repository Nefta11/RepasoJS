class PersonaSiuu {

    static contador = 1;

    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido=apellido;
        this._edad=edad;

        this._idPersona = PersonaSiuu.contador++;
    }

    get idPersona(){
        return this._idPersona
    }
    
    get nombre(){
        return this._nombre
    } 

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido
    }
    
    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad=edad;
    }

    datosCompletos(){
        return this._idPersona+ " -"+ this._nombre+" "+this._apellido+" "+this._edad+" años";
    }

    toString(){
        return this.datosCompletos();
    }
}


class EmpleadoSiu extends PersonaSiuu {

        static contadorEmpleado = 1;

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad)
        this._sueldo = sueldo;

        this._idEmpleado = EmpleadoSiu.contadorEmpleado++;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo= sueldo;
    }

    datosCompletos(){
        return `idPersona ${super.datosCompletos()} idEmpleado ${this._idEmpleado}  - ${this._sueldo}`;
    }
}

class Cliente extends PersonaSiuu{

    static contadorCliente = 1

    constructor(nombre,apellido,edad,fecha){
        super(nombre,apellido,edad)

        this._fecha= fecha;

        this._idCliente = Cliente.contadorCliente++;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fecha(){
        return this._fecha;
    }

    set fecha(fecha){
        this._fecha = fecha;
    }

    datosCompletos(){
        return "idPersona "+super.datosCompletos()+" idCliente"+" "+this._idCliente+" "+" - "+this._fecha
    }
}



persona1 = new PersonaSiuu("Neftali","Hernandez",24)
console.log(persona1.toString())

persona2 = new PersonaSiuu ("Avryl","Salas",20)
console.log(persona2.toString())
Empleado1 = new EmpleadoSiu("Rosario","Vergara",54, 1200)
console.log(Empleado1.toString())

nuevoCliente = new Cliente("Naruto", "Uzumaki",17,"22/08/2024")
console.log(nuevoCliente.toString())

console.log(PersonaSiuu.contador)