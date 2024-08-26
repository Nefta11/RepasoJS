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

//async con await
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolved=>{
        resolved("Promesa con await")
    });
    console.log(await miPromesa);//await solo se puede usar dentro de una funcion declarada con async
}

funcionConPromesaYAwait();