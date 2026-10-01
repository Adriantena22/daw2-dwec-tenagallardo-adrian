"use strict";

const prompt = require("prompt-sync")();

// Usamos Map para asociar dorsal (clave) con nombre (valor)
const equipo = new Map();

// PARTE 1: Introducir jugadores hasta cadena vacía
let entradaDorsal = prompt("Introduce el dorsal del jugador (vacío para terminar):");

while (entradaDorsal !== "" && entradaDorsal !== null) {
  const nombre = prompt("Introduce el nombre del jugador:");
  const dorsal = Number(entradaDorsal);

  equipo.set(dorsal, nombre);
  console.log(`Añadido: [${dorsal}] ${nombre}`);

  entradaDorsal = prompt("Introduce el dorsal del jugador (vacío para terminar):");
}

// PARTE 2: Consultar jugadores hasta introducir un 0
let entradaConsulta = prompt("Introduce dorsal a consultar (0 para salir):");

while (entradaConsulta !== "" && entradaConsulta !== null && Number(entradaConsulta) !== 0) {
  const dorsalConsulta = Number(entradaConsulta);

  if (equipo.has(dorsalConsulta)) {
    console.log(`El dorsal ${dorsalConsulta} es: ${equipo.get(dorsalConsulta)}`);
  } else {
    console.log(`No hay ningún jugador con el dorsal ${dorsalConsulta}.`);
  }

  entradaConsulta = prompt("Introduce dorsal a consultar (0 para salir):");
}

console.log("Fin de la consulta.");