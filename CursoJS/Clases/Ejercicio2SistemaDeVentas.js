// Clase de producto
class Producto {
    static contadorProductos = 1;

    constructor(nombre, precio){
        this._idProducto = Producto.contadorProductos++;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}`;
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
    }

    get idOrden (){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS()){
            this._productos.push(producto);
        } else {
            console.log("Número máximo de productos alcanzado.");
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for (let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productoOrden = "";
        for (let producto of this._productos){
            productoOrden += '\n{'+ producto.toString() +'}';
        }
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()} Productos: ${productoOrden}`);
    }
}

// Ejemplo de uso
let producto1 = new Producto("Camisa", 200);
let producto2 = new Producto("Pantalón", 455);
let producto3 = new Producto("Zapatos", 600);
let producto4 = new Producto("Cinturón", 150);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);

orden2.mostrarOrden();
