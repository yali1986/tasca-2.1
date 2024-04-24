// ex1 Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.

function potConduir() {

    let print = document.getElementById("print")
    let age = parseInt(document.getElementById("age").value)

    age >= 18 ? print.innerHTML = `Puedes conducir.` : print.innerHTML = `No puedes conducir.`
}


// ex 2 Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'. 

let resultado = function () {

    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let print2 = document.getElementById("print2")

    print2.innerHTML = num1 > num2 ? `num1 és més gran.` : `num2 és més gran.`
}


// ex 3 Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.

let resultado3 = function () {

    let print3 = document.getElementById("print3")
    let num3 = parseInt(document.getElementById("num3").value)

    print3.innerHTML = num3 > 0 ? 'positivo' : (num3 < 0 ? 'negativo' : 'cero');
}


// Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.


function getMaxim () {
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let c = parseInt(document.getElementById("c").value)
    trobarMaxim(a,b,c)
}

function trobarMaxim(a,b,c) {
    let print4 = document.getElementById("print4")
    print4.innerHTML = a > b & a > c ? "El valor máximo lo tiene el número A." : (b > a & b > c ? "El valor máximo lo tiene el número B." : "El valor máximo lo tiene el número C.");
}

// function trobarMaxim() {
//     let print4 = document.getElementById("print4")
//     let a = parseInt(document.getElementById("a").value)
//     let b = parseInt(document.getElementById("b").value)
//     let c = parseInt(document.getElementById("c").value)
//     print4.innerHTML = a > b & a > c ? "El valor máximo lo tiene el número A." : (b > a & b > c ? "El valor máximo lo tiene el número B." : "El valor máximo lo tiene el número C.");
// }

// ex 4 Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.


function obtenerNumeros () {
    const numeros = [4, 5, 6, 7, 8, 9]
    parOImpar (numeros) 
}

function parOImpar (numeros) {
    
    let print5 = document.getElementById("print5")

    for (let i= 0; i < numeros.length; i++) {
        let  mensaje = numeros[i] % 2 == 0 ? "es par" : "es impar"
        print5.innerHTML += `El ${numeros[i]} ${mensaje}. <br>`       
    }   
}
