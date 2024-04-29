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
let edadPersona=22;

if(edadPersona >= EDAD_ADULTO){
    console.log("La persona es mayor de edad tiene una deda de : ", edadPersona)
}else{
    console.log("La persona es menor de edad")
}


// Dias de la semana

let diaSemana = 8;

if (diaSemana == 1){
    console.log("Lunes")
}
else if (diaSemana == 2){
    console.log("Martes")
}
else if (diaSemana == 3){
    console.log("Miercoles")
}
else if (diaSemana == 4){
    console.log("Jueves")
}
else if (diaSemana == 5){
    console.log("Viernes")
}
else if (diaSemana == 6){
    console.log("Sabado")
}
else if (diaSemana == 7){
    console.log("Domingo")
}
else
    (`Dia erroneo ${diaSemana}`)