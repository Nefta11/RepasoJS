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


let raton1 = new Raton("USB","Hp")
console.log(raton1.toString())

let raton2 = new Raton ("Bluethoo", "Dell")
console.log(raton2.toString())


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

teclado1 = new Teclado ("usb","Magic")
teclado2=new Teclado("Bluethoo","Acer")
console.log(teclado1.toString())
console.log(teclado2.toString())

