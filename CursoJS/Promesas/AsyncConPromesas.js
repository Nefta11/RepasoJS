let miPromesa = new Promise((resolved,rejected)=>{
    let expresion = true;
    if(expresion)
        resolved("Resolvio correcto");
    else
        rejected("se produjo un error")

});


let promesa = new Promise((resolver)=>{
    setTimeout(()=>resolver("Saludos con promesa y timeOut"),3000)
});

//async indica que una funcion regresara una promesa

async function  miFuncionConPromesa() {
    return "Saludos con promesa y async";
}

miFuncionConPromesa().then(valor => console.log(valor));