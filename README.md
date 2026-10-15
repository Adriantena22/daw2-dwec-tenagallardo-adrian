# GUÍA MAESTRA DWEC: TEMA 2 Y TEMA 3 (2º DAW)
**Estudiante:** Adrián  
**Asignatura:** Desarrollo Web en Entorno Cliente  
**Uso:** Manual de estudio y chuleta rápida para examen (GitHub README.md)

---

## ÍNDICE
1. [TEMA 2: FUNDAMENTOS DE JAVASCRIPT Y NODE.JS](#tema-2-fundamentos-de-javascript-y-nodejs)
   - [Metáforas visuales de la teoría](#metáforas-visuales-de-la-teoría-tema-2)
   - [Reglas esenciales: Tipos, Falsy y Ámbitos](#reglas-esenciales-tipos-falsy-y-ámbitos)
   - [Ejercicio 1: Fallo de precisión decimal (IEEE 754)](#ejercicio-1-fallo-de-precisión-decimal-ieee-754)
   - [Ejercicio 2: Estadísticas completas de un Array](#ejercicio-2-estadísticas-completas-de-un-array)
   - [Ejercicio 3: Programación Orientada a Objetos (Clases y Herencia)](#ejercicio-3-programación-orientada-a-objetos-clases-y-herencia)
   - [Preguntas seguras de examen (Tema 2)](#preguntas-seguras-de-examen-tema-2)
2. [TEMA 3: JAVASCRIPT EN EL NAVEGADOR (DOM, BOM Y EVENTOS)](#tema-3-javascript-en-el-navegador-dom-bom-y-eventos)
   - [Metáforas visuales de la teoría](#metáforas-visuales-de-la-teoría-tema-3)
   - [Tabla rápida de métodos del DOM y BOM](#tabla-rápida-de-métodos-del-dom-y-bom)
   - [Ejercicio 1: Formulario calculador con bloqueo (Todo en 1 archivo)](#ejercicio-1-formulario-calculador-con-bloqueo)
   - [Ejercicio 2: Lista interactiva con creación y borrado de nodos (Todo en 1 archivo)](#ejercicio-2-lista-interactiva-con-creación-y-borrado-de-nodos)
   - [Ejercicio 3: Formulario con validación, preventDefault y estilos (Todo en 1 archivo)](#ejercicio-3-formulario-con-validación-preventdefault-y-estilos)
   - [Preguntas seguras de examen (Tema 3)](#preguntas-seguras-de-examen-tema-3)

---

# TEMA 2: FUNDAMENTOS DE JAVASCRIPT Y NODE.JS

## Metáforas visuales de la teoría (Tema 2)

* **El Motor (Navegador vs Node.js):**  
  JavaScript es el motor de un vehículo.
  * En el **Navegador**, el motor mueve un autobús turístico con ventanas hacia el exterior (`window`, `document`, botones HTML).
  * En **Node.js**, el mismo motor mueve un tractor subterráneo (`acceso a ficheros`, `red`, `terminal`), pero no existen las ventanas ni las etiquetas HTML.
* **Las Variables (`var` vs `let` vs `const`):**  
  * `var` (El megáfono indiscreto): Su voz atraviesa paredes y se escucha en toda la función o en el ámbito global. Provoca sobrescrituras accidentales. **Desaconsejado.**
  * `let` (La habitación cerrada): Solo existe dentro del bloque `{ }` donde nace. Al salir de la llave de cierre, la variable desaparece. Permite cambiar su valor.
  * `const` (La placa grabada): Tiene el mismo límite de bloque que `let`, pero una vez asignado su valor inicial no se puede reasignar con `=`.
* **Los Comparadores (`==` vs `===`):**  
  * `==` (El guardia perezoso): Solo mira si se parecen superficialmente. Convierte los tipos en segundo plano: `"5" == 5` da `true`.
  * `===` (El agente de aduanas estricto): Exige coincidencia en **valor y tipo exacto de dato**. `"5" === 5` da `false` porque uno es `string` y el otro `number`. **Usa siempre este.**

---

## Reglas esenciales: Tipos, Falsy y Ámbitos

### Los 6 valores "Falsy" (Siempre dan `false` dentro de un `if`):
1. `false` (el booleano falso explícito).
2. `0` y `-0` (el cero numérico).
3. `""` (cadena de texto vacía).
4. `null` (ausencia intencionada de valor/objeto).
5. `undefined` (variable declarada a la que no se le ha dado valor).
6. `NaN` (*Not a Number*, error en operación matemática).

*Cualquier otro valor en JavaScript se evalúa como `true` (incluidos arrays vacíos `[]` y objetos vacíos `{}`).*

---

## Ejercicio 1: Fallo de precisión decimal (IEEE 754)
**Enunciado:** Suma `0.1` mil veces en una variable e imprime el resultado bruto y el corregido a 2 decimales usando `.toFixed()`.

```javascript
// Declaramos la variable acumuladora con let para poder modificarla en cada iteración
let sumaAcumulada = 0;

// Definimos un bucle for tradicional para iterar exactamente 1000 veces (desde 0 hasta 999)
for (let i = 0; i < 1000; i++) {
  // Sumamos 0.1 al valor acumulado previo en cada vuelta del ciclo
  sumaAcumulada = sumaAcumulada + 0.1;
}

// Mostramos el valor en memoria para ver el desajuste de coma flotante binaria (99.99999999999858)
console.log("Resultado bruto en memoria: " + sumaAcumulada);

// Aplicamos toFixed(2) para forzar un redondeo a dos decimales y convertirlo en cadena limpia
const sumaLimpia = sumaAcumulada.toFixed(2);

// Mostramos el resultado final esperado por pantalla (100.00)
console.log("Resultado corregido con toFixed(2): " + sumaLimpia);
```

---

## Ejercicio 2: Estadísticas completas de un Array
**Enunciado:** Dado un array de números, recórrelo con un único bucle para obtener: el menor, el mayor, cuántos son pares, cuántos impares y la media de todos.

```javascript
// Declaramos el array inicial con valores numéricos de prueba
const listaValores = [14, 3, 27, 8, 92, 5];

// Inicializamos la variable del menor tomando como referencia el primer elemento del array
let menor = listaValores[0];

// Inicializamos la variable del mayor tomando como referencia el primer elemento del array
