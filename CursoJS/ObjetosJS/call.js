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

console.log(Persona1.nombreCompleto("TSU", 5525098119))//Paso de argumentos en llamdas en los metodos

console.log(Persona1.nombreCompleto.call(Persona2, "Ingeniero", 7641146446))

