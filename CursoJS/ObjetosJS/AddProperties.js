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