// Estilos CSS para los mensajes en la consola
const estiloConsole = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";
const estiloTitulo = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 20px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";

// Mostrar título de la práctica
console.log("%c--------------PRACTICA 7 ITERADORES-------------", estiloTitulo);

// Mostrar el uso del bucle "for"
console.log("%c1.- UTILIZANDO EL BUCLE FOR", estiloConsole);

let tecnolgias = ['HTML', 'JAVASCRIPT', 'PYTHON', 'SQL', 'ANGULAR', 'FLUTTER', 'REACT', 'DJANGO', 'FLASK', 'JIRA', 'GIT', 'SWAGGER', 'HTML'];

for (let i = 0; i < tecnolgias.length; i++) {
    console.log(`EL ELEMENTO EN LA POSICION: ${i} ES: ${tecnolgias[i]}`);
};

// Mostrar el uso del bucle "while" como reto
console.log("----------RETO2 WHILE 😘");

let iterador = 0;

while (iterador < tecnolgias.length) {
    console.log(tecnolgias[iterador])
    iterador++;
}

// Mostrar el uso del bucle "forEach"
console.log("%c2.- UTILIZANDO EL BUCLE FOR EACH", estiloConsole);

console.log('Solución A)');
tecnolgias.forEach((elemento) => console.log(`EL ELEMENTO EN LA POSICION: ${tecnolgias.indexOf(elemento)} ES: ${elemento}`));

console.log('Solución B)');
tecnolgias.forEach((elemento, indice) => console.log(`EL ELEMENTO EN LA POSICION: ${indice} ES: ${elemento}`));
tecnolgias.pop();

// Mostrar el uso del método "map" para transformar elementos en un nuevo arreglo
console.log("%c3.- UTILIZANDO MAP PARA TRANSFORMAR LOS ELEMENTOS DENTRO DEL ARREGLO", estiloConsole);

console.log("RETO1");

// Usar el método "map" para transformar elementos de "tecnolgias" en "tecnolgiasTipo" según su tipo
let tecnolgiasTipo = tecnolgias.map(
    (elemento) => {
        if (["HTML", "REACT", 'ANGULAR'].includes(elemento))
            return (elemento + ", FRONTEND")
        else if (["PYTHON", "DJANGO", "FLASK", "GIT", "JIRA", "SQL"].includes(elemento))
            return (elemento + ", BACKEND")
        else
            return (elemento + ", FRONTEND Y BACKEND")
    });

console.table(tecnolgiasTipo);
