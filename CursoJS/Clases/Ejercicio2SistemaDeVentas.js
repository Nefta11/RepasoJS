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
        return `idProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $ ${this._precio}`
    }
}


class Orden {
    static contadorOrdenes = 1;
    static MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = Orden.contadorOrdenes++;
        this._productos = [];
        this._contadorProductosAgregados =0;
    }

    get idOrden (){
        return this._idOrden
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);

        }
        else{
            console.log("Numero superado de productos elimina bobo")
        }
    }

    calcularTotal(){
        let totalVenta = 0 ;
        for (let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productoOrden = " ";
        for (let producto of this._productos){
            productoOrden+= producto.toString() + " ";
        }
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal}, Productos: ${productoOrden} `)
    }
}


let producto1 = new Producto("Camisa", 200)
let producto2 = new Producto("Pantalon", 455)

console.log(producto1.toString())
console.log(producto2.toString())