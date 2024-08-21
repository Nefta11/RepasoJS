let Persona1={
    nombre: "Neftali",
    apellido: "Hernandez",

    nombreCompleto: function (titulo, tel){
        return titulo + ": "+ this.nombre + " " + this.apellido+ ", "+ tel;
    }
}

let Persona2={
    nombre:"Janeth",
    apellido:"Amixtlan"
}


// Uso de call en para usar la funcion de nombre completo

console.log(Persona1.nombreCompleto("Ing", 5525098119))//Paso de argumentos en llamdas en los metodos

let arreglo = ['Ing',7641146446]
console.log(Persona1.nombreCompleto.apply(Persona2, arreglo))

//De esta manera se pasan los valores de los argumentos mediante el uso de Apply
// Es similar como nos podemos dar cuenta