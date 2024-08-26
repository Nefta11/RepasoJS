//Promesas 
let miPromesa = new Promise((resolved,rejected)=>{
    let expresion = true;
    if(expresion)
        resolved("Resolvio correcto");
    else
        rejected("se produjo un error")

});

miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);