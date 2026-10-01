"use strict";

const prompt = require("prompt-sync")();


const aleatorios = [];

// Generamos 10 números aleatorios entre 0 y 20
for (let i = 0; i < 10; i++) {
  const num = Math.floor(Math.random() * 21);
  aleatorios.push(num);
}

const usuario = [];

// Pedimos 5 números al usuario
for (let i = 0; i < 5; i++) {
  const entrada = prompt(`Introduce el número ${i + 1} de 5:`);
  usuario.push(Number(entrada));
}

// Comprobamos los aciertos
const acertados = [];

for (let i = 0; i < usuario.length; i++) {
  const n = usuario[i];
  if (aleatorios.includes(n) && !acertados.includes(n)) {
    acertados.push(n);
  }
}

// Mostramos resultados
console.log("Números generados:", aleatorios);
console.log("Tus números:", usuario);
console.log("Número de aciertos:", acertados.length);
console.log("Números acertados:", acertados);