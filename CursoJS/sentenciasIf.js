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


//Algoritmo para saber si una persona es mayor de edad

const EDAD_ADULTO =18;
let edadPersona=30;

if(edadPersona >= EDAD_ADULTO){
    console.log("La persona es mayor de edad tiene una deda de : ", edadPersona)
}