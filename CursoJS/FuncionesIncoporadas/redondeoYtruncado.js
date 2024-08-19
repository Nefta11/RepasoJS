// Redondeo y truncado en JS

let numero = 8.6, redondeo, truncado;

//Redondeo
//Math.round() redondea al valor entero mas sercano

// .5 o superior, redondea al valor entero superior mas cercano

redondeo = Math.round(numero)
console.log(redondeo)

//Truncado
//Math.trunc() elimina la parte flotante decimal

truncado = Math.trunc(numero)
console.log(truncado)