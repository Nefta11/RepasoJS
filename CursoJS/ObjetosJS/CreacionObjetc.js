// Creacion de un objeto a partir de New

let perro = new Object();

perro.nombre = 'Oslo';
perro.edad = '1  mes';
perro.raza= 'Callejero'

console.log(perro)



//Acceder a las propiedades nueva 

console.log(perro['nombre'])

// for in

for (Nombrepropiedad in perro){
    console.log(Nombrepropiedad)
    console.log(perro[Nombrepropiedad])
}