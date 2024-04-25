// ex1 Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

let print = document.getElementById("print")
const Array1 = ["leopardo", "gato", "tigre"]
print.innerHTML =  `${Array1.join(", ")} <br>`
const Array2 = ["cotorra", "perico", "urraca"]
print.innerHTML +=  `${Array2.join(", ")} <br>`

function resume () {
  const newArray = [...Array1, ...Array2]
  print.innerHTML =  `${newArray.join(", ")}`}


// ex2 Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.


let print2 = document.getElementById("print2")
function suma(...valores) {
  let total = 0
  for (let i = 0; i < valores.length; i++) {
    total += valores[i]    
  }
  return print2.innerHTML += `${total}`
}

// suma (1,2,3,6)  // se llama desde el onclick

 
// ex3 Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

let objecte1 = {
  name: "Canva",
  lastname: "Stands",}

let objecte2 = {
  ...objecte1 }

objecte2.lastname = "Stan"

console.log(objecte2)
console.log(objecte1)

//ex4 Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.

const aguas = ["mar", "río", "lago", "laguna"]

const [agua1, agua2, ...rest] = aguas
console.log(agua1)
console.log(agua2)
console.log(rest)

//ex5 Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.


let print3 = document.getElementById("print3")
function tres(a,b,c) {
  print3.innerHTML = `${a} ${b} ${c}`
//console.log(a,b,c)
}

const nuevos = [1, 2, 3]

//tres(...nuevos)  se llama desde el onclick

//ex6 Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

const obj1 = {
name: "uno",
lastname: "dos"
}

const obj2 = {
age: 45,
course: "Front End"
}

const obj3 = {
  ...obj1,
  ...obj2
}

console.log (obj3)