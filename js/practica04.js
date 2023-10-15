// Muestra un aviso en la consola
console.warn("----Práctica 04: Objetos en JavaScript----");

// Muestra un mensaje en la consola con un estilo CSS personalizado
console.log("%c1. Variables Independientes", "background: linear-gradient(to right,#EC24D0, #5BFF33); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

// Se declaran tres variables independientes: producto, precio y disponibilidad
const producto = 'Tablet 5 pulgadas';
const precio = 3525.00;
const disponibilidad = true;

// Se muestran en la consola los valores de las variables junto con sus tipos
console.log(`Leyendo los datos desde variables independientes del producto`);
console.log(`Nombre: ${producto}, ${typeof producto}`);
console.log(`Precio: $${precio}, ${typeof precio}`);
console.log(`Disponibilidad: ${disponibilidad}, ${typeof disponibilidad}`);

// Se imprime un comentario para indicar el comienzo de la sección donde se crean objetos
console.log("%c2. Declaración de un objeto", "background: linear-gradient(to right,#EC24D0, #5BFF33); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

// Se crea un objeto llamado 'productoObjetos' con tres propiedades
let productoObjetos = {
    nombre: "Tablet \"9",
    precio: 3525,
    disponibilidad: true
}

// Se muestra el objeto en la consola y se presenta en forma de tabla
console.log(productoObjetos);
console.table(productoObjetos);

// Se muestran las propiedades del objeto y sus tipos
console.log(`Leyendo los datos desde variables independientes del producto`);
console.log(`Nombre: ${productoObjetos.nombre}, ${typeof productoObjetos.nombre}`);
console.log(`Precio: $${productoObjetos.precio},${typeof productoObjetos.precio}`);
console.log(`Disponibilidad:${productoObjetos.disponibilidad},${typeof productoObjetos.disponibilidad}`);

// Se muestra el tipo de 'productoObjetos'
console.log(typeof productoObjetos)

// Se imprime un comentario para indicar el inicio de la desestructuración de un objeto
console.log("%c3. Desestructuración de un objeto", "background: linear-gradient(to right,#EC24D0, #5BFF33); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

// Se desestructura el objeto 'productoObjetos' en tres variables independientes
let {nombre: productName, precio: productPrice, disponibilidad: productAvailability} = productoObjetos;
let productCategory;

// Se muestran en la consola los valores de las variables desestructuradas
console.log(productName)
console.log(productPrice)
console.log(productAvailability)

// Se aplican algunas condiciones y se actualizan los valores de variables
if(productAvailability == false)
    productAvailability = "No disponible";

if(productPrice > 1000)
    productPrice = "Caro";

if(productName.includes("Tablet"))
    productCategory = "Electrónica";

// Se muestra en la consola una descripción de los datos desestructurados
console.log(`Leyendo los datos desestructurados:
Nombre: ${productName},
Tipo de precio: ${productPrice},
Disponibilidad: ${productCategory}`);

// Se muestra el objeto 'productoObjetos' en forma de tabla
console.table(productoObjetos);

// Se imprime un comentario para indicar la mejora de objetos (Object Literal)
console.log("%c4. Mejora de Objetos (Object Literal)", "background: linear-gradient(to right,#EC24D0, #5BFF33); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

// Se crea un nuevo objeto 'productObject' con las variables independientes
const productObject = {productName, productPrice, productCategory, productCategory}

// Se muestra el objeto 'productObject' en forma de tabla
console.table(productObject);


/*
Objetos en JavaScript: En JavaScript, los objetos son estructuras de datos que pueden contener propiedades y métodos. En este código, se muestra cómo crear, leer y manipular objetos.

Propiedades de un Objeto: Las propiedades son los atributos de un objeto que almacenan datos. Cada propiedad tiene un nombre y un valor. Por ejemplo, en el objeto productoObjetos, las propiedades son nombre, precio, y disponibilidad.

Desestructuración de Objetos: La desestructuración es una técnica que permite extraer valores de un objeto y asignarlos a variables independientes. Se utiliza para simplificar el acceso a las propiedades de un objeto, como se hace con productName, productPrice, y productAvailability.

Objetos Literales: Los objetos literales son una forma de crear objetos en JavaScript utilizando una notación de llaves y pares clave-valor. En el código, se crea un nuevo objeto llamado productObject de esta manera.

Manipulación de Objetos: El código muestra cómo agregar nuevas propiedades a un objeto existente (productoObjetos), eliminar propiedades (delete productoObjetos['color']), y modificar el valor de una propiedad (productoObjetos.nombre = 'Tablet 10 pulgadas').

Congelación de Objetos (Freeze): Object.freeze es un método que evita cualquier cambio en un objeto. En el código, se intenta congelar el objeto productoObjetos.

Sellado de Objetos (Seal): Object.seal es un método que permite modificar propiedades existentes en un objeto, pero no permite agregar ni eliminar propiedades. Se utiliza en el objeto clienteObjeto.

Destructuración de Múltiples Objetos: Se muestra cómo desestructurar propiedades de múltiples objetos (productoObjetos y clienteObjeto) en variables independientes.

Unión de Objetos: El código muestra cómo unir dos objetos en uno solo utilizando Object.assign y el operador de propagación (...). Esto crea un nuevo objeto que combina las propiedades de ambos objetos.
*/

////////////////////////////////////////// PRACTICA 5: MANIPULACION DE OBJETOS/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*
Objetos en JavaScript: Este código demuestra cómo trabajar con objetos en JavaScript y realizar operaciones como agregar propiedades, eliminarlas, modificar valores y combinar objetos.

5. Agregar una propiedad a un objeto existente:
*/
console.log("%c5. Agregar una propiedad a un objeto existente:", "background: linear-gradient(to right,#EC24D0, #5BFF33); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");
console.table(productoObjetos); // Mostramos el objeto en la consola
productoObjetos[`imagen`] = "img/products/table.jpg"; // Agregamos una propiedad 'imagen'
productoObjetos[`color`] = "Magenta"; // Agregamos una propiedad 'color'
console.table(productoObjetos); // Mostramos el objeto actualizado en la consola

/*
6. Eliminar una propiedad a un objeto existente:
*/
console.log("%c6. Eliminar una propiedad a un objeto existente", "background: linear-gradient(to right,#EC24D0, #5BFF33); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");
console.table(productoObjetos); // Mostramos el objeto en la consola
delete productoObjetos[`color`]; // Eliminamos la propiedad 'color'
console.table(productoObjetos); // Mostramos el objeto actualizado en la consola

/*
7. Modificar el valor de una propiedad:
*/
console.log("%c7. Modificar el valor de una propiedad", "background: linear-gradient(to right,#EC24D0, #5BFF33); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");
console.table(productoObjetos); // Mostramos el objeto en la consola
productoObjetos.nombre = `Tablet 10 pulgadas`; // Modificamos el valor de la propiedad 'nombre'
console.table(productoObjetos); // Mostramos el objeto actualizado en la consola

/*
8. Congelación de un objeto (Freeze):
*/
console.log("%c8. Congelacion de un objeto <Freeze>", "background: linear-gradient(to right,#EC24D0, #5BFF33); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");
console.table(productoObjetos); // Mostramos el objeto en la consola
// Object.freeze(productoObjetos); // Intento de congelar el objeto (comentado)
productoObjetos.precio = 7597.58; // Modificamos la propiedad 'precio'
productoObjetos[`Marca`] = "Apple"; // Agregamos una propiedad 'Marca'
delete productoObjetos[`disponibilidad`]; // Eliminamos la propiedad 'disponibilidad'
console.table(productoObjetos); // Mostramos el objeto actualizado en la consola

/*
9. Sellado de un objeto (Seal):
*/
console.log("%c9. Sellado de un objeto <SEAL>", "background: linear-gradient(to right,#EC24D0, #5BFF33); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

let clienteObjeto = {
  nombre: "Neftali Arturo Hernandez",
  correo: "Neftaliarturo@gmail.com",
  tipo: "Frecuente"
};

console.table(clienteObjeto); // Mostramos el objeto en la consola
Object.seal(clienteObjeto); // Sellamos el objeto clienteObjeto
clienteObjeto.correo = "arturo@gmail.com"; // Modificamos la propiedad 'correo'
clienteObjeto[`direccion`] = "AV PRINCIPAL SN"; // Agregamos una propiedad 'direccion'
delete clienteObjeto[`tipo`]; // Intento de eliminar la propiedad 'tipo' (no se permite)
console.table(clienteObjeto); // Mostramos el objeto actualizado en la consola

/*
10. Destructuración de 2 o más objetos:
*/
console.log("%c10. Destructuración de 2 o más objetos", "background: linear-gradient(to right,#EC24D0, #5BFF33); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

const { nombre: nombreP, precio: precioP, disponibilidad: disponibilidadP } = productoObjetos;
const { nombre: nombreC, correo: correoC, tipo: tipoC } = clienteObjeto;

console.log(nombreP, precioP, disponibilidadP); // Mostramos las propiedades desestructuradas de productoObjetos
console.log(nombreC, correoC, tipoC); // Mostramos las propiedades desestructuradas de clienteObjeto

/*
11. Union de 2 o más objetos, utilizando Object.assign() (realizarlo con precaución, y no es admitido en REACT):
*/
console.log("%c11. Union de 2 o más objetos, utilizando Object.assign() < realizarlo con precaucion, y no es damitido en REACT", "background: linear-gradient(to right,#EC24D0, #5BFF33); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

let ventaObjeto = Object.assign(productoObjetos, clienteObjeto); // Unimos los objetos productoObjetos y clienteObjeto
console.log("Objeto: Producto");
console.log(productoObjetos); // Mostramos el objeto productoObjetos
console.log("Objeto: Cliente");
console.log(clienteObjeto); // Mostramos el objeto clienteObjeto
console.log("Objeto: Venta");
console.log(ventaObjeto); // Mostramos el objeto unido

/*
12. Union de 2 o más objetos, UTILIZANDO SPREAD OPERATOR:
*/
console.log("%c12. Union de 2 o más objetos, UTILIZANDO SPREAD OPERATOR", "background: linear-gradient(to right,#EC24D0, #5BFF33); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

let cantidad = 4;
ventaObjeto = {
  producto: { ...productoObjetos }, // Utilizamos el operador de propagación (...) para unir las propiedades de productoObjetos
  cliente: { ...clienteObjeto }, // Utilizamos el operador de propagación (...) para unir las propiedades de clienteObjeto
  cantidad
};

console.log("objeto: Producto");
console.log(productoObjetos); // Mostramos el objeto productoObjetos
console.log("objeto: Cliente");
console.log(clienteObjeto); // Mostramos el objeto clienteObjeto
console.log("objeto: Venta");
console.log(ventaObjeto); // Mostramos el objeto unido

console.log("Actualización del correo electrónico");
clienteObjeto.correo = "netf_22@hotmail.com"; // Actualizamos la propiedad 'correo' en clienteObjeto
console.log("objeto: Cliente");
console.log(clienteObjeto); // Mostramos el objeto clienteObjeto actualizado
console.log("objeto: Venta");
console.log(ventaObjeto); // Mostramos el objeto unido actualizado
