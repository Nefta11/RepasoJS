let TheBest = {
    name:"Cristiano Ronaldo",
    country:"Portugal",
    goldenBall:5,
    goals:"879",
    Teams:["Sporting Portugal","Manchester United","Real Madrid", "Juventus","Al nassar"],
    wordsCup:5,
    frase:"Siuuu",
    lenguaje:"Por",
    age:39,
    get lang(){
        return this.lenguaje.toUpperCase();
    },
    set lang(lang){
        this.lenguaje = lang.toUpperCase();
    },
    get NameAndFrase(){
        return this.name+ " "+ this.frase
    } 
}

console.log(TheBest.lang)

TheBest.lang = "Esp";

console.log(TheBest.lang)
console.log(TheBest.lenguaje)