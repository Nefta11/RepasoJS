
class Persona {
    //Atributos Estaticos en js
    static contadorObjetosPersona = 0;// Atributo de nuestra clase
    
    static get MAX_OBJ(){
        return 5;
    }

constructor(nombre, apellido){
    this._nombre=nombre;
    this._apellido= apellido;
    if (Persona.contadorObjetosPersona < Persona.MAX_OBJ){
        this.idPersona = ++Persona.contadorObjetosPersona;
    }
    else{
        console.log("Se han superado al maximo de objetos permitidos")
    }
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
    return this.idPersona+ " "+ this._nombre+ " "+ this._apellido;
}
    //Sobreescribiendo el metodo de la clase padre )(Object)
toString(){
    return this.nombreCompleto();//Se aplica polimorfismo
}

//Utilizacion de la palabara static
static saludar(){
    console.log("Holaa esto es para ustedes aficion Siuuuuuuu")
}

static saludar2(persona){
    console.log(persona.nombre+" "+persona.apellido)
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
    }


let persona1 = new Persona ("Cristiano", "Ronaldo");
console.log(persona1.toString())

let Empleado1 = new Empleado ("Luis","Salas","Banco")
console.log(Empleado1.toString())

let persona2 = new Persona ("Rocio","Lewandowski")
console.log(persona2.toString())

console.log(Persona.contadorObjetosPersona)

console.log(Persona.MAX_OBJ)

let persona3 = new Persona("Mariano","Negro de kaka")
let persona4 = new Persona("Raul", "chirinos")
let persona5 = new Persona("Raul", "chirinos")

console.log(persona4.toString())