let miPromesa = new Promise((resolved,rejected)=>{
    let expresion = true;
    if(expresion)
        resolved("Resolvio correcto");
    else
        rejected("se produjo un error")

});


let promesa = new Promise((resolver)=>{
    console.log("inicion promesa")
    setTimeout(()=>resolver("Saludos con promesa y timeOut"),3000)
    console.log("fin promesa")
});

promesa.then(valor => console.log(valor))