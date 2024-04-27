// Exercici 1.7: Promises & Async/Await

//ex1 Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.

 let text = "Hola mundo"

 function getData () { 
  let print1= document.getElementById("print1") 
    return new Promise((resolve) => {
  
  setTimeout(() => {
    resolve(print1.innerHTML = text) 
    }, 2000);
})  
//getData()  // se llama desde el onclick
//ex2 Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.
.then((response) => console.log(response))
}


//ex3 Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

function getInput () {
  let inp= document.getElementById("inp").value
  let print= document.getElementById("print")   
 
  return new Promise ((resolve, reject) => {
    if (inp !== "Hola") { 
      setTimeout (()=> {        
      reject(new Error("El texto no es Hola"))
    }, 2000)  
    } else {     
      setTimeout(() => {
        resolve(inp)
      }, 2000)
    }         
  })
  .then((response) => {      
    print.innerHTML = (response)
    console.log(response)          
  })
  .catch((err) => {   
    console.log("Error: " + err.message)
    print.innerHTML = "Error: " + err.message       
  })  
}


//ex4: Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola. 

function getInput4 () {
  return new Promise((resolve) => {  
    setTimeout(() => {       
      resolve(print4.innerHTML = text)     
      }, 2000);
  })   
}

async function nueva () {  
  const saludo = await getInput4 ()
  console.log(saludo) 
}


//ex5 Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.
//Otra vez

let print5= document.getElementById("print5") 

async function nueva5() {
  let saludo
  try {
    saludo = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(print5.innerHTML = text)
      }, 2000);
      
      setTimeout(() => {
        reject(new Error("Ha ocurrido un error"))
      }, 2000)
    })
  } catch (error) {
    console.error(error)
    saludo = "Error: " + error.message
  }

  console.log(saludo)
  print5.innerHTML = saludo
}

// ex6 Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.


const promesa1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Primera promesa resuelta después de 2 segundos");
  }, 2000);
});

const promesa2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Segunda promesa resuelta después de 3 segundos");
  }, 3000);
});

// Promise.all para esperar a que ambas promesas se resuelvan
Promise.all([promesa1, promesa2])
  .then((resultados) => {
    // Cuando ambas promesas se resuelvan: 
    console.log("Resultados:", resultados);
  })
  .catch((error) => {
    // Si alguna de las promesas es rechazada: 
        console.error("Error:", error);
  });