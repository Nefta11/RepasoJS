let persona = {
name:'Neftali',
lastName:'Hernandez',
email:'nefta@gmail.com',
age:24,
nombreCompleto: function(){
    return this.name + ' ' +this.lastName;
}
}


console.log(persona.name)
console.log(persona.lastName)
console.log(persona.age)

console.log(persona)


//Agregar Metodos a Objetos en JS

console.log(persona.nombreCompleto())
