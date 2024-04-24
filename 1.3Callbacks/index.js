// ex1 Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

let nombre = null

function processar (nombre, callback) {    
        nombre = 6
        callback (nombre)    
}

function imprimir(nombre) {    
    let print = document.getElementById("print")
    print.innerHTML = `${nombre}` 
}
// processar(nombre, imprimir) // se llama desde onClick



// ex2 Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.


let num1 = null
let num2 = null


function calculadora (num1, num2, callback) {
    num1 = 2
    num2 = 3
    callback(num1, num2)    
}

function suma (num1, num2) {
    let print2 = document.getElementById("print2")
    print2.innerHTML = num1 + num2
}

// calculadora(num1, num2, suma)  // se llama desde onClick

// ex3 Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.


let nom = null

function esperarISaludar(nom, callback) {
    setTimeout(function() {    
      nom = callback(nom)
      let print3 = document.getElementById("print3");
      print3.innerHTML = `Hola ${nom}`  
    }, 2000); 
  }
  
  function nombreA(nom) {   
    nom = "Yali"
    return nom
  }
// esperarISaludar(nom, nombreA) // se llama desde el onclick


// ex4 Exercici 4 Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.
 
const array = [ "libro", "cuaderno", "libreta" ]
let print4 = document.getElementById("print4") 

 function processarElements (array, callback) {    
       for (let i = 0; i < array.length; i++) { 
        callback()    
        print4.innerHTML += array[i] + "<br><br>"
       }
 }

 function cada () {
  print4.innerHTML += "Cada " 
 }
  // processarElements (array, tipos) se llama desde el onclick


  // ex 5 Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.


  let cadena = "palabra"
  let print5 = document.getElementById("print5")

  function processarCadena (cadena, callback) {   
   print5.innerHTML = `${cadena.toUpperCase()} `
   callback()
  }

  function otraPalabra () {  
    print5.innerHTML += "y otraPalabra"
  }




 