// DECLARACION DE VARIABLES

// Declaración con VAR
console.log(
  "%cDECLARACION CON VAR",
  "background: linear-gradient(to right, #2563EB, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"
);

// Declaración con 'var' permite la redeclaración de variables y no está limitada por el ámbito de bloque.
var apellido; // Declaración de una variable 'apellido' sin inicializar.

var nombre = "Marco"; // Declaración de la variable 'nombre' con valor "Marco".
console.log(`Hola ${nombre}`);
console.log(typeof(nombre)); // Muestra el tipo de dato de 'nombre', que es una cadena (string).

nombre = 17; // Reasignación de la variable 'nombre' con el valor 17.
console.log(`Hola ${nombre}`);
console.log(typeof(nombre)); // Muestra el nuevo tipo de dato de 'nombre', que es un número (number).

// LET
console.log(
  "%cDECLARACION CON LET",
  "background: linear-gradient(to right,#2563EB, #ff3300);color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"
);

// Declaración con 'let' permite la reasignación de variables y tiene ámbito de bloque.
let colorFavorito = "Negro"; // Declaración de la variable 'colorFavorito' con valor "Negro".
console.log(`Tu color favorito es: ${colorFavorito}`);

colorFavorito = 25; // Reasignación de la variable 'colorFavorito' con el valor 25.
console.log(`Tu color favorito es: ${colorFavorito}`);
console.log(typeof(colorFavorito)); // Muestra el tipo de dato de 'colorFavorito', que es un número (number).

// CONST
console.log(
  "%cDECLARACION CON CONST",
  "background: linear-gradient(to right,#2563EB, #ff3300); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"
);

// Declaración con 'const' crea constantes que no pueden ser reasignadas y deben inicializarse.
const cancionFavorita = "Las que no tienen papa"; // Declaración de la constante 'cancionFavorita' con valor "Las que no tienen papa".
console.log(`Tu canción favorita es: ${cancionFavorita}`);
console.log(typeof(cancionFavorita)); // Muestra el tipo de dato de 'cancionFavorita', que es una cadena (string).

let num1 = 1;
let num2 = "1";

if (num1 === num2) {
  console.log("Son iguales");
} else {
  console.log("No son iguales"); // Esta rama se ejecutará porque num1 y num2 no son del mismo tipo.
}

console.log(
  "%c¡Hola Tontuelos!",
  "background: linear-gradient(to right, #2563EB, #ff3300); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"
);
