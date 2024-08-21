let TheBest = {
    name:"Cristiano Ronaldo",
    country:"Portugal",
    goldenBall:5,
    goals:"879",
    Teams:["Sporting Portugal","Manchester United","Real Madrid", "Juventus","Al nassar"],
    wordsCup:5,
    frase:"Siuuu",
    get NameAndFrase(){
        return this.name+ " "+ this.frase
    } 
}

console.log(TheBest)

//Ahora mandarlos a llamar con GET

console.log(TheBest.NameAndFrase)