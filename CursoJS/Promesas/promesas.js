//Promesas 
let miPromesa = new Promise((resolved,rejected)=>{
    let expresion = true;
    if(expresion)
        resolved("Resolvio correcto");
    else
        rejected("se produjo un error")

});

//Primer ejemplo
miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);

//segundo ejemplo con otra sintaxis
miPromesa.then(valor => console.log(valor)).catch(error)