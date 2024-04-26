//Senetencias If

let miNumero = 10;

//Revisar si el numero es positivo

if(miNumero > 0 ){
    console.log(`Valor positivo ${miNumero}`)
}
//Sentencias else
else if (miNumero < 0){
    console.log(`Valor negativo ${miNumero}`)
} else{
    console.log(`Valor cero ${miNumero}`)
}




////OPérador ternario
//sirve para simplificar toda la sentencia anterior obvio si el codigo es corto

miNumero<0?console.log("positivo"):console.log("negativo")