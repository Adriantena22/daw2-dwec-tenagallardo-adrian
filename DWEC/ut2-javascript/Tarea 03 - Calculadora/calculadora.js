"use strict";
const prompt = require("prompt-sync")();

// ESTADO INICIAL
let pantalla = 0;
let memoria = 0;

// Notifica el resultado cada vez que cambia la pantalla
function notificarResultado() {
  console.log("[PANTALLA]: " + pantalla);
}

// OPERACIONES CON 2 OPERANDOS 
function sumar(numero) {
  pantalla += numero;
  notificarResultado();
}

function restar(numero) {
  pantalla -= numero;
  notificarResultado();
}

function multiplicar(numero) {
  pantalla *= numero;
  notificarResultado();
}

function dividir(numero) {
  if (numero !== 0) {
    pantalla /= numero;
  } else {
    console.log("Error: No se puede dividir entre cero.");
  }
  notificarResultado();
}

function modulo(numero) {
  pantalla %= numero;
  notificarResultado();
}

function potencia(exponente) {
  pantalla = pantalla ** exponente;
  notificarResultado();
}

// OPERACIONES CON 1 OPERANDO
function factorial() {
  let n = Math.floor(pantalla);

  if (n < 0) {
    console.log("Error: No existe el factorial de números negativos.");
    pantalla = 0;
  } else {
    // Inicia en 1 porque si multiplicas por 0 el resultado siempre sería 0
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
    pantalla = resultado;
  }
  notificarResultado();
}

// MEMORIA Y RESET
function guardarMemoria() {
  memoria = pantalla;
  console.log("Memoria guardada: " + memoria);
  notificarResultado();
}

function recuperarMemoria() {
  pantalla = memoria;
  notificarResultado();
}

function limpiarTodo() {
  pantalla = 0;
  memoria = 0;
  notificarResultado();
}

// MENÚ PRINCIPAL 
function menuPrincipal() {
  let continuar = true;

  while (continuar) {
    console.log("\n------------------------------------------");
    console.log(" PANTALLA: " + pantalla + "  |  MEMORIA: " + memoria);
    console.log("------------------------------------------");
    console.log("1. Sumar (+)");
    console.log("2. Restar (-)");
    console.log("3. Multiplicar (*)");
    console.log("4. Dividir (/)");
    console.log("5. Módulo (%)");
    console.log("6. Potencia (x^y)");
    console.log("7. Factorial (n!)");
    console.log("M. Guardar en memoria");
    console.log("R. Recuperar memoria");
    console.log("C. Limpiar todo (a cero)");
    console.log("0. Salir");

    const opcion = prompt("Selecciona una opción: ").toUpperCase();

    switch (opcion) {
      case "1":
        sumar(Number(prompt("Número a sumar: ")));
        break;

      case "2":
        restar(Number(prompt("Número a restar: ")));
        break;

      case "3":
        multiplicar(Number(prompt("Número a multiplicar: ")));
        break;

      case "4":
        dividir(Number(prompt("Número divisor: ")));
        break;

      case "5":
        modulo(Number(prompt("Número para módulo: ")));
        break;

      case "6":
        potencia(Number(prompt("Exponente: ")));
        break;

      case "7":
        factorial();
        break;

      case "M":
        guardarMemoria();
        break;

      case "R":
        recuperarMemoria();
        break;

      case "C":
        limpiarTodo();
        break;

      case "0":
        console.log("Cerrando calculadora...");
        continuar = false;
        break;

      default:
        console.log("Opción no válida.");
        break;
    }
  }
}

// INICIO
menuPrincipal();