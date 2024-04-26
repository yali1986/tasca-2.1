// Exercici 1.6: Array loops

//ex1 forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];
let noms = ['Anna', 'Bernat', 'Clara']
let print = document.getElementById("print")

noms.forEach(nom => {print.innerHTML += nom + "<br>" 
console.log(nom + "<br>")})

//ex2 for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];
let print2 = document.getElementById("print2")

for (let nom of noms) {
    print2.innerHTML += nom + "<br>" 
    console.log(nom + "<br>")
}

//ex3 filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6];
let print3 = document.getElementById("print3")
let numeros = [1, 2, 3, 4, 5, 6]

const numpares= numeros.filter((num) => num%2 === 0)
print3.innerHTML += `${numpares.join(", ")}`  

//ex4  for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.
let print4 = document.getElementById("print4")
let obj = { nom: "Ona", edat: 25, ciutat: 'Barcelona' }

for( let property in obj) {
    print4.innerHTML += `${property}: ${obj[property]}<br>`
    console.log(`${property}: ${obj[property]}`) 
}

//ex5 for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];

let numeros6 = [1, 2, 3, 4, 5, 6]
let print5 = document.getElementById("print5")

for (num of numeros6) {
    if (num !== 5) {
      console.log(num) 
      print5.innerHTML += `${num} <br>` 
    } else {
        console.log(num) 
        print5.innerHTML += `${num} <br>` 
        break; 
    }          
    } 

//ex6 for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara']
       
  for (let [index, element] of noms.entries())  {      
    //El método entries() en JavaScript se utiliza en arrays para obtener un iterador que genera pares [índice, valor] para cada elemento en el array. Esto permite acceder tanto al índice como al valor de cada elemento durante la iteración.
   console.log(`Índice ${index}: ${element}`)   
  }

  // otra manera de imrpimir el indice de cada elemento del array: numeros6.forEach((element, index) => {console.log(`Índice ${index}: ${element}`);});
    