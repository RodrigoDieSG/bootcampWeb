// 1. Declarar el array de participantes
let participantes = ["Elena", "Carlos", "Javier", "Laura", "Miguel", "Patricia"];

// 2. Mostrar la clasificación actual
console.log("Clasificación inicial:");
console.log(participantes);

// 3. Ajustes en las posiciones

// Laura supera a Javier (intercambiamos posiciones)
let indiceJavier = participantes.indexOf("Javier");
let indiceLaura = participantes.indexOf("Laura");

// Intercambiar posiciones
[participantes[indiceJavier], participantes[indiceLaura]] = [participantes[indiceLaura], participantes[indiceJavier]];

// Patricia es descalificada y se elimina del concurso
participantes = participantes.filter(nombre => nombre !== "Patricia");

// Se incorporan Raúl y Sofía detrás de Elena y antes de Carlos
let indiceCarlos = participantes.indexOf("Carlos");
participantes.splice(indiceCarlos, 0, "Raúl", "Sofía");

// Carmen toma la posición principal
participantes.unshift("Carmen");

// 4. Mostrar la clasificación actualizada
console.log("\nClasificación actualizada:");
console.log(participantes);