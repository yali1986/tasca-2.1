// 1.5: Array transformations

//ex1 Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.

let numeros = [1, 2, 3, 4]
let cuadnumeros = numeros.map(numero => numero * numero)
console.log (cuadnumeros)

//Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.
let numpares = numeros.filter(numero => numero%2===0)
console.log(numpares)

//ex3 Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.
let numeros2 = [1, 10 , 8, 11]
let numM10 = numeros2.find(num => num > 10)
console.log(numM10)

//ex4 Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.
let numeros3 = [13, 7, 8, 21]

const total2 = numeros3.reduce((total, num) => total += num, 0)
console.log(total2)


//ex5 Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

// - Filtra els nombres majors o iguals a 10.

// - Multiplica cada nombre filtrat per 2.

// - Calcula la suma dels nombres filtrats i multiplicats per 2.

// - La funció ha de retornar el resultat de la suma.

// const total5 = num2M10.reduce(total, (num2) => total += num2 * 2, 0)
// console.log(total5)

  // const total5 = Array5.filter(num => (num >=10))
  // console.log(total5)

const Array5 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]
const num2M10 = Array5.filter(num => (num >=10)).reduce((total, num) => total += num * 2, 0) 
console.log(num2M10)


//ex6 Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament

const array6 = [11, 12, 13, 14]

const result6 = array6.some (num => num >=10)
console.log(result6) //alguns dels elements de l'array són majors que 10 porque devuelve true

const result7 = array6.every (num => num >=10)
console.log(result7)  //todos els elements de l'array són majors que 10 porque devuelve true