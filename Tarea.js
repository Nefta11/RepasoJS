console.log("%c1.1.TAREA : Arreglo con 10 Productos, cada uno con precio unitario.", "background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

let productos = ['Huevo', 'Arroz', 'Leche', 'Pan', 'Manzanas', 'Pasta', 'Aceite', 'Tomates', 'Cereal', 'Pollo'];
let precios = [30, 25, 25, 6.5, 44, 18, 45, 28, 32, 150.6];
let pedidos = [1,2,3,4,5,6,7,8,9,1];

function calcularProductosConPreciosYCantidades() {
  return productos.map((producto, i) => ({
    nombre: producto,
    precio: precios[i],
    pedidos: { ID: i, cantidad: pedidos[i] || 0 }, // Usamos 0 si el valor no está definido EN CASO DE NO LLENAR EL ARREGLO
  }));
}

let productosConPreciosYCantidades = calcularProductosConPreciosYCantidades();

function calcularTotalCompra() {
  let total = productosConPreciosYCantidades.reduce((total, producto) => {
    return total + producto.precio * producto.pedidos.cantidad;
  }, 0);

  return total;
}

console.warn('Lista de productos con precios y cantidades:');
productosConPreciosYCantidades.forEach((producto) => {
  console.log(`${producto.nombre}: $${producto.precio} | ${producto.pedidos.cantidad} | $${(producto.precio * producto.pedidos.cantidad)}`);
});

console.warn(`Total de la compra: $${calcularTotalCompra()}`);

function recalcularTotalCompra() {
  productosConPreciosYCantidades = calcularProductosConPreciosYCantidades(); // Actualiza la variable
  let total = productosConPreciosYCantidades.reduce((total, producto) => {
    return total + producto.precio * producto.pedidos.cantidad;
  }, 0);

  console.warn(`Total de la compra: $${total}`);
}
