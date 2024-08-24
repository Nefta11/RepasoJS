class DispositivosEntrada {

    constructor(tipoEntrada, marca){

        this._tipoEntrada = tipoEntrada;
        this._marca = marca;

    }


    get tipoEntrada (){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada= tipoEntrada;
    }

    get marca (){
        return this._marca;
    }

    set marca (marca){
        this._marca = marca;
    }

}

class Raton extends DispositivosEntrada {
    static contadorRatones = 1;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = Raton.contadorRatones ++;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}`
    }
}


class Teclado extends DispositivosEntrada{

    static contadorTeclados = 1;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca)

        this._idTeclado = Teclado.contadorTeclados++;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: idTeclado:${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}`
    }
}


class Monitor {
    static contadorMonitores = 1;

    constructor(marca,tamaño){
        this._idMonitor = Monitor.contadorMonitores++;
        this._marca=marca;
        this._tamaño=tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca =marca;
    }

    get tamaño(){
        return this._tamaño;
    }

    set tamaño(tamaño){
        this._tamaño=tamaño;
    }

    toString(){
        return `Monitor: idMonitor ${this._idMonitor}, Marca: ${this.marca}, Tamaño: ${this._tamaño}`
    }
}



let raton1 = new Raton("USB","Hp")
console.log(raton1.toString())

let raton2 = new Raton ("Bluethoo", "Dell")
console.log(raton2.toString())



teclado1 = new Teclado ("usb","Magic")
teclado2=new Teclado("Bluethoo","Acer")
console.log(teclado1.toString())
console.log(teclado2.toString())

monitor1= new Monitor("Korui",22)
monitor2=new Monitor("Samsung",17)

console.log(monitor1.toString())
console.log(monitor2.toString())
