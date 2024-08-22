//Clase de producto

class Producto {

    static contadorProductos = 1;
    constructor(nombre, precio){
        this._idProducto = Producto.contadorProductos++;
        this._nombre = nombre;
        this._precio= precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set (nombre){
        this._nombre=nombre;
    }

    get (){
        return this._precio;
    }

    set (precio){
        this._precio= precio;
    }

    toString(){
        return `idProducto: ${this._idProducto} `
    }
}
