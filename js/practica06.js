// Advertencia de inicio del programa
console.warn("----Práctica 06: Arreglos en JavaScript----");

// Declaración de un arreglo llamado "meses"
console.log("%c1. Declaración de un arreglo (Array)", "background: linear-gradient(to right,#FF3933, #2E64FE); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");
const meses = ["Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Perico", "Septiembre", "Octubre", "Noviembre"];

// Imprimir el arreglo "meses" en la consola y mostrarlo como tabla
console.log(meses);
console.table(meses);

// Mostrar el tipo de datos del arreglo "meses"
console.log(typeof meses);

// Declaración de un arreglo mixto llamado "arregloMixto" con varios tipos de datos
let arregloMixto = ["Hola", 10, -58.2, false, Symbol(55), 'a', -0.000000001, true, { prop1: "Valor", prop2: "2" }];

// Imprimir el arreglo mixto en la consola y mostrarlo como tabla
console.log(arregloMixto);
console.table(arregloMixto);

// Declaración de un arreglo multidimensional llamado "matrix"
let matrix = [[1, 2, 3], ["a", "b", "c", "d"]];

// Imprimir el arreglo multidimensional "matrix" en la consola y mostrarlo como tabla
console.log(matrix);
console.table(matrix);

// Acceder a un elemento específico en el arreglo multidimensional
console.log(matrix[1][2]);

// Recuperar el valor de los elementos de un arreglo
console.log("%c2. Recuperar el valor de los elementos de un arreglo", "background: linear-gradient(to right,#FF3933, #2E64FE); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

// Acceder al valor de un elemento en el arreglo "meses" en la posición 8 (noveno mes)
console.log("El mes en la posición 8:", meses[8], "que en realidad es el noveno mes, porque en el arreglo la posición siempre será n-1.");

// Intentar acceder a un elemento en una posición que no existe (meses[12])
console.log(`Accediendo al elemento en la posición 12 del arreglo mixto: ${meses[12]}`);

// Funciones de un arreglo (Array Methods)
console.log("%c3. Funciones de un arreglo (Array Methods)", "background: linear-gradient(to right,#FF3933, #2E64FE); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

// Obtener la longitud (cantidad de elementos) de un arreglo usando "length"
console.log("Para saber el total de elementos de un arreglo utilizaremos el método: LENGTH");
console.log(`El arreglo de meses tiene ${meses.length} elementos.`);
console.log(`El arreglo mixto tiene ${arregloMixto.length} elementos.`);

// Funciones de un arreglo
console.log("%c4. Funciones de un arreglo", "background: linear-gradient(to right,#FF3933, #2E64FE); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

// Agregar un elemento al final del arreglo usando "push"
meses.push("Diciembre");
console.log("Para agregar un elemento al arreglo en la posición final usaremos el método: PUSH");
console.table(meses);

// Agregar un elemento al inicio del arreglo usando "unshift"
meses.unshift("Enero");
console.log("Para agregar un elemento al arreglo en la posición inicial usaremos el método: UNSHIFT");
console.table(meses);

// Eliminar el último elemento del arreglo usando "pop"
console.log("Para eliminar el elemento en la última posición se utiliza el método: POP");
console.log(`Eliminando el elemento en la última posición: ${meses[meses.length - 1]}`);
meses.pop();
console.table(meses);

// Eliminar el primer elemento del arreglo usando "shift"
console.log("Para eliminar el elemento en la primera posición se utiliza el método: SHIFT");
console.log(`Eliminando el elemento en la primera posición: ${meses[0]}`);
meses.shift();
console.table(meses);

// Dividir el arreglo original, eliminando los primeros 3 elementos, usando "splice"
console.log("Dividir el arreglo original, sacar los primeros 3 elementos");
meses.splice(0, 3);
console.table(meses);

// Tarea: Agregar elementos a un arreglo en una determinada posición
console.log("%cTAREA: Agregar elementos a un arreglo en determinada posición", "background: linear-gradient(to right,#FF3933, #2E64FE); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");
console.table(meses);

// Agregar elementos en posiciones específicas del arreglo usando "splice"
meses.splice(12, 0, "Holaa"); // Agrega "Holaa" en la posición 12 del arreglo
meses[97] = "How are you?"; // Agrega "How are you?" en la posición 97 del arreglo
console.log(meses);

// Métodos para manipulación de arreglos que no modifican el arreglo original
console.log("%c4. Métodos para manipulación de arreglos que no modifican el arreglo original", "background: linear-gradient(to right,#FF3933, #2E64FE); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

// Declaración de un arreglo llamado "signosZodiacales"
let signosZodiacales = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];

// Mostrar la longitud (cantidad de elementos) del arreglo "signosZodiacales"
console.table(`El total de signos es: ${signosZodiacales.length}`);

// Desestructuración de Arreglos
console.log("%c6. Desestructuración de Arreglos", "background: linear-gradient(to right,#FF3933, #2E64FE); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

// Desestructurar el arreglo "signosZodiacales" para obtener valores individuales
let [signo0, signo1, signo2, signo3, signo4, signo5, signo6, signo7] = signosZodiacales;
console.log(`El signo zodiacal en la posición [0] es: ${signo0}`);
console.log(`El signo zodiacal en la posición [7] es: ${signo7}`);

// Desestructurar el arreglo "signosZodiacales" para obtener valores específicos
let [signo_0, , , , , , , signo_7] = signosZodiacales;
console.log(`El signo zodiacal en la posición [0] es: ${signo_0}`);
console.log(`El signo zodiacal en la posición [7] es: ${signo_7}`);

// Métodos de arreglos que crean un nuevo arreglo para no modificar el original
console.log("%c6. Métodos de arreglos que crean un nuevo arreglo para no modificar el original", "background: linear-gradient(to right,#FF3933, #2E64FE); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

// Métodos de arreglos que crean un nuevo arreglo para no modificar el original
console.log("%c6.1. filter()", "background: linear-gradient(to right,#FF3933, #2E64FE); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);");

// Filtrar elementos en el arreglo "signosZodiacales" que contienen la letra 'a'
console.log("El arreglo original es:");
console.log(signosZodiacales);

console.log("Filtrando datos...");
const signosFiltrados = signosZodiacales.filter((signo) => signo.toLowerCase().includes("a"));
console.log("Filtrado terminado...");
console.log("El arreglo resultante es:");
console.log(signosFiltrados);
