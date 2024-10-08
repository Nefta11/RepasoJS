// Herencia en js

class Persona {
        //Atributos Estaticos en js
        static contadorObjetosPersona = 0;// Atributo de nuestra clase
        email = "aquivatucorreo@email.com"//Atributo de nuestros objetos

        
    constructor(nombre, apellido){
        this._nombre=nombre;
        this._apellido= apellido;
        Persona.contadorObjetosPersona++;
        console.log("se incrementa contado :"+ Persona.contadorObjetosPersona)
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
    

//sOBREESCRITURA EN JAVA SCRIPT
//MODIFICAR EL COMPORTAMIENDTO DE ALGUN METODO DEFINIDO DE LA CLASE PADRE 
           //Sobreescritura
        nombreCompleto(){
            return super.nombreCompleto()+" -  "+this._departamento;
        }
}

let persona1 = new Persona ('Neftali', 'Vergara')
console.log(persona1.toString())

let Empleado1 = new Empleado ("Jorge", "Sayayin", "Ventas Piso")
console.log(Empleado1)
console.log(Empleado1.nombreCompleto()) // Aqui Heredamos metodos de la clase padre



//Metodo toString
console.log(Empleado1.toString())

//persona1.saludar();  No es posible llamar un método static desde un objeto

Persona.saludar(); // Solo se pueden llamar desde clase 
Persona.saludar2(persona1)

Empleado.saludar2(Empleado1)

console.log(persona1.contadorObjetosPersona)
console.log(Persona.contadorObjetosPersona)

console.log(Empleado.contadorObjetosPersona)

Empleado1.email="neftaliarturohernandez@gmail.com"
console.log(Empleado1.email)
console.log(persona1.email)