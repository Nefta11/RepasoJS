class PersonaSiuu {

    static contador = 1;

    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido=apellido;
        this._edad=edad;

        this.idPersona = PersonaSiuu.contador++;
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
        return this.idPersona+ " -"+ this._nombre+" "+this._apellido+" "+this._edad+" años";
    }

    toString(){
        return this.datosCompletos();
    }
}


class EmpleadoSiu extends PersonaSiuu {

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad)
        this._sueldo = sueldo;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo= sueldo;
    }
}




persona1 = new PersonaSiuu("Neftali","Hernandez",24)
console.log(persona1.toString())

Empleado1 = new EmpleadoSiu("Rosario","Vergara",54, 1200)
console.log(Empleado1.toString())