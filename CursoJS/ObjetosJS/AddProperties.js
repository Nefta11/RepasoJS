//Agregar una propiedad a un objeto.
let RealMdrid = {
Liga: "La liga Española",
mejorJugador: "Mbappe",
NumChampions:"15",
LeyendaAbsoluta:"Cristiano Ronaldo"
}

console.log(RealMdrid)

RealMdrid.Precidente= "Florentino Perez" //De esta manera agrego una nueva propiedad
console.log(RealMdrid)

//Eliminar Una propiedad de mi objeto

delete RealMdrid.Precidente; //De esta manera se elimina una propiedad en nuestro objeto

console.log(RealMdrid)



//////////////////////////////////////////////////////////////////////////////
// Formas Distintasd de Imprimir Un Objetco en Js

//1. Concatenar cada valor de cada propiedad
console.log(RealMdrid.LeyendaAbsoluta+"  Es la leyenda absoluta de "+ RealMdrid.Liga)

//2. For in

for (nombrePropiedad in RealMdrid){
    console.log(RealMdrid[nombrePropiedad])
}

// 3. Objetc Value

let RealMdridArray = Object.values(RealMdrid)
console.log(RealMdridArray)

// 4. JSON

let RealMdridString = JSON.stringify(RealMdrid);
console.log(RealMdridString)