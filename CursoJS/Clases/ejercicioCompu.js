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


class Computadora{

    static contadorComputadoras = 1;

    constructor(nombre,monitor,teclado,raton){
        this._idComputadora = Computadora.contadorComputadoras++;
        this._nombre = nombre;
        this._monitor=monitor;
        this._teclado=teclado;
        this._raton=raton;
    }
    toString(){
    return `Computadora-  ${this._idComputadora} ${this._nombre} \n ${this._monitor} \n ${this._raton}  \n ${this._teclado}`
    }
}


class Orden{
    static contadorOrdenes = 1;

    constructor(){
        this._idOrden = Orden.contadorOrdenes++;
        this._computadoras = []
    }

    get idOrdenenes(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = "";
        for (let computadora of this._computadoras){
            computadorasOrden+=`\n${computadora}`;
        }

        console.log(`Orden : ${this._idOrden}, Computadoras: ${computadorasOrden}`);
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


let pc1 = new Computadora("Lenovo", monitor1, raton1, teclado1)
let pc2 = new Computadora("ARmada", monitor2, raton2, teclado2 )
console.log(pc1.toString())
console.log(pc2.toString())

let orden1= new Orden();
orden1.agregarComputadora(pc1);
orden1.agregarComputadora(pc2);
orden1.mostrarOrden();

let orden2 = new Orden()
orden2.agregarComputadora(pc1);
orden2.agregarComputadora(pc2);
orden2.mostrarOrden()