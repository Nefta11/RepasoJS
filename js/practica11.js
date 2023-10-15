/* ---PRACTICA 11: Otros métodos para arreglos*/
console.warn("---PRACTICA 11: Otros métodos útiles para Arreglos (Array Methods)")

console.log("%c1-FUNCIONES FLECHA ","background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")

let tecnolgias = ['HTML','JAVASCRIPT','PYTHON','SQL','ANGULAR','FLUTTER','REACT','DJANGO','FLASK','JIRA','GIT','SWAGGER','HTML'];
let numeros = [50,17,-5,40,2.8,-3.141516,6,6,316.2005,-5432,9999,8]

/* SOME - Algunos, busca dentro de los elementos si alguno cumple con la condicón 
definida en una funcion y retorna si esto es verdadero o falso */
console.log("%cSOME- Alguno... ","background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")

let resultado = numeros.some((numeros)=> 0);
console.log(`Buscando si en el arreglo hay algún numero mayor a 0`)
console.log(resultado)

console.log(`Buscando si en el arreglo hay algún numero mayor a 100 000`)
let resultados = numeros.some((numeros)=> 100000);
console.log(resultados)


/*FIND -- Devuelve el primer elemento que cumpla con la condición descrita en la función
, si ninguno cumple con la condición retorna un undefined */
console.log("%cFIND- Encontrar.. ","background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")

resultado = numeros.find((numero) => numero>1000)
console.log(`Buscando si en el arreglo si hay un numero mayor que 1000`)
console.log(resultado)

resultado = numeros.find((numero) => numero<-10000)
console.log(`Buscando si en el arreglo si hay un numero menor que -10 000`)
console.log(resultado)



console.log("%c EVERY- Para cada.. ","background: linear-gradient(to right,#7460D6, #A0D660); color: white; font-size: 24px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);")
resultado = tecnolgias.every((elemento)=> typeof elemento == "string");
console.log(resultado)

let resultado2= tecnolgias.some(elemento=>elemento.includes("a"))
console.log(resultado2) 