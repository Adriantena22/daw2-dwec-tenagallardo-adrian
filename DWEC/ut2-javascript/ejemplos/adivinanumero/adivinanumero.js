const prompt = require('prompt-sync')();

const NUMEROINTENTOS = 10;
const VALORMAXIMO = 100;
const NUMEROSECRETO = Math.floor(Math.random() * (VALORMAXIMO + 1));

let acertado = false;

for (let intento = 1; intento <= NUMEROINTENTOS && !acertado; intento++) {
    const numero = Number(prompt("Introduce un número: "));

    if (numero > NUMEROSECRETO) {
        console.log("El número es mayor que el número secreto");
    } else if (numero < NUMEROSECRETO) {
        console.log("El número es menor que el número secreto");
    } else {
        console.log("Has acertado");
        acertado = true;
    }
}

if (!acertado) {
    console.log("Has agotado los intentos. El número secreto era: " + NUMEROSECRETO);
}