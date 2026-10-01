"use strict";

const prompt = require("prompt-sync")();


const lista = [];

// Pedimos el primer producto antes de entrar al bucle
let producto = prompt("Introduce un producto (vacío para terminar):");

// El bucle sigue mientras no sea cadena vacía ni se pulse cancelar
while (producto !== "" && producto !== null) {
  if (lista.includes(producto)) {
    console.log(`El producto "${producto}" ya está en la lista.`);
  } else {
    lista.push(producto);
    console.log(`"${producto}" añadido a la lista.`);
  }

  // Volvemos a pedir para la siguiente vuelta
  producto = prompt("Introduce un producto (vacío para terminar):");
}

// Ordenamos alfabéticamente y mostramos el resultado
lista.sort();
console.log("Lista de la compra ordenada:", lista);