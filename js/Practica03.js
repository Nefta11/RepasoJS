// Practica 03: TIPOS DE DATOS EN JAVASCRIPT
/* ESTILIZACIÓN DE SECCIONES */

// Declaración de una variable 'style' que contiene estilos CSS para formatear el texto de las secciones.
const style = 'background-color: gray; color: white; border: 3px solid orange; font-zise:'

// Mensaje de advertencia y título de la práctica.
console.warn("----Practica 03: Tipos de datos en JavaScript----")

// Sección 1: UNDEFINED - No Definido
console.log("%c1. UNDEFINED- No Definido", style);

// Declaración de una variable 'nombreCliente' sin inicializar.
let nombreCliente
console.log(nombreCliente) // Muestra 'undefined' en la consola.
console.log(typeof nombreCliente); // Muestra el tipo de dato de 'nombreCliente', que es 'undefined'.

// Sección 2: UNDEFINED - Booleano (TRUE o FALSE)
console.log("%c2. UNDEFINED- Boleano (TRUE o FALSE)", style);

// Declaración de variables booleanas 'mayorEdad' y 'alumnoInscrito' con valores 'true' y 'false' respectivamente.
let mayorEdad = true;
let alumnoInscrito = false;

console.log(`¿Es mayor de edad? ${mayorEdad}`) // Muestra '¿Es mayor de edad? true' en la consola.
console.log(typeof mayorEdad); // Muestra el tipo de dato de 'mayorEdad', que es 'boolean'.

console.log(`¿Esta inscrito? ${alumnoInscrito}`) // Muestra '¿Esta inscrito? false' en la consola.
console.log(typeof alumnoInscrito); // Muestra el tipo de dato de 'alumnoInscrito', que es 'boolean'.

// Sección 3: NUMBER - Numero (INT, DOUBLE, FLOAT, NEGATIVE...)
console.log("%c3. NUMBER - Numero (INT, DOUBLE, FLOAT, NEGATIVE...)", style);

// Declaración de variables numéricas 'edad', 'precio', 'temperature' y 'tipoMoneda'.
const edad = 15;
const precio = 114.50;
const temperature = -5;
let tipoMoneda;

console.log(`Tu edad es de ${edad} años.`) // Muestra 'Tu edad es de 15 años.' en la consola.
console.log(typeof edad); // Muestra el tipo de dato de 'edad', que es 'number'.
tipoMoneda = "Pesos.";
console.log(`El precio del producto es de ${precio} ${tipoMoneda}`) // Muestra 'El precio del producto es de 114.5 Pesos.' en la consola.
console.log(typeof precio); // Muestra el tipo de dato de 'precio', que es 'number'.
console.log(`La temperatura es de: ${temperature} °C`) // Muestra 'La temperatura es de: -5 °C' en la consola.
console.log(typeof temperature); // Muestra el tipo de dato de 'temperature', que es 'number'.

// Declaración de variables de texto para información del cliente.
nombreCliente = "Neftali Arturo Hernandez Vergara"
const generoCliente = "Masculino";
const direccionCliente = "Avenida 16 de septiembre NO. 125, Col. Centro, Xicotepect de Juárez Puebla";

// Sección 4: STRING (VARCHAR) - Cadena o Cadena de Caracteres
console.log("%c4. STRING (VARCHAR) - Cadena o Cadena de Caracteres", style);
console.log(`### DATOS DEL CLIENTE` )
console.log(`Nombre: ${nombreCliente}, ${typeof nombreCliente}`) // Muestra el nombre del cliente y su tipo de dato.
console.log(`Género: ${generoCliente}, ${typeof generoCliente}`) // Muestra el género del cliente y su tipo de dato.
console.log(`Edad: ${edad}, ${typeof edad}`) // Muestra la edad del cliente y su tipo de dato.
console.log(`Dirección: ${direccionCliente}, ${typeof direccionCliente}`) // Muestra la dirección del cliente y su tipo de dato.

// Sección 5: BIG INT (ENTERO GRANDE)
console.log("%c5. BIG INT (ENTERO GRANDE)", style);

// Declaración de variables numéricas 'numero12posisciones' y 'numero24posisciones' como BigInt.
let numero12posisciones = 123456789012;
const numero24posisciones = BigInt(12345678912345678912345678);

console.log(`El valor es de: ${numero12posisciones}, ${typeof numero12posisciones}`) // Muestra el valor y tipo de dato de 'numero12posisciones'.
console.log(`El valor es de: ${numero24posisciones}, ${typeof numero24posisciones}`) // Muestra el valor y tipo de dato de 'numero24posisciones'.

// Conversión de 'numero12posisciones' a BigInt para realizar la suma.
numero12posisciones = BigInt(numero12posisciones);
console.log(`El resultado de la suma es de: ${numero12posisciones + numero24posisciones}`) // Muestra el resultado de la suma como BigInt.

// Sección 6: SYMBOL
console.log("%c6. SYMBOL", style);

// Declaración de variables 'primerSymbol' y 'segundoSymbol' como símbolos.
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol) // Muestra 'false' porque los símbolos son únicos.
console.log(primerSymbol.valueOf()) // Muestra el valor del primer símbolo.
console.log(segundoSymbol.valueOf()) // Muestra el valor del segundo símbolo.

// Sección 7: NULL
console.log("%c7. NULL", style);

// Declaración de la constante 'descuento' con valor null.
const descuento = null;
console.log(`El valor es ${descuento}`) // Muestra 'El valor es null' en la consola.






// ... (código anterior)

// Resumen de Tipos de Datos en JavaScript:

/**
 * 1. Undefined:
 *    - Se utiliza para representar valores no definidos.
 *    - Se muestra cómo declarar una variable sin inicializar y su tipo de dato.
 * 
 * 2. Boolean:
 *    - Se utilizan variables booleanas para representar valores verdaderos o falsos.
 *    - Se muestra su tipo de dato y ejemplos de uso.
 * 
 * 3. Number:
 *    - Se declaran variables numéricas para representar edades, precios y temperaturas.
 *    - Se muestra su tipo de dato y ejemplos de uso.
 * 
 * 4. String:
 *    - Se utiliza una variable de cadena para representar el nombre del cliente.
 *    - Se muestra su tipo de dato y un ejemplo de uso.
 * 
 * 5. BigInt:
 *    - Se muestra cómo declarar y operar con enteros grandes usando BigInt.
 * 
 * 6. Symbol:
 *    - Se declaran y comparan dos símbolos, destacando su unicidad.
 * 
 * 7. Null:
 *    - Se utiliza la constante 'null' para representar la ausencia de valor en una variable.
 * 
 * El código también incluye comentarios explicativos y formatos de estilo para resaltar visualmente
 * las secciones que tratan sobre cada tipo de dato.
 */
