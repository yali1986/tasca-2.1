// ex1

// function add(a, b) {
//     return a + b;
// }

const add = (a, b) => a + b;

console.log (add(3,4))


// ex2
let randomNumber = () => Math.floor(Math.random()* 101) //por 101 para incluir el 100, y redondeando hacia abajo.

console.log (randomNumber())      

// ex3 Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona.console.log(Hola, ${this.name})

// let greet = new Person ("Carlos")
// console.log(Carlos.greet()) // llamando al método

let Carlos = new Person ("Carlos")
let saludo = (Carlos) => `Buen día, ${Carlos.name}`
console.log(saludo(Carlos))

let Luci = new Person("Luci")
let saludo2 = (Luci) => `Hi, ${Luci.name}`
console.log(saludo2(Luci))

let nuevo = new Person("Pablo")
let saludo3 = (nuevo) => `Hola, ${nuevo.name}`
console.log(saludo3(nuevo))
