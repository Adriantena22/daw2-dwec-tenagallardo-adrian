# GUÍA COMPLETA Y MANUAL DE EXAMEN: DWEC (2º DAW)
**Estudiante:** Adrián  
**Asignatura:** Desarrollo Web en Entorno Cliente (DWEC)  
**Objetivo:** Guía de referencia rápida, estudio teórico anti-TDAH y ejercicios resueltos para exámenes.

---

## ÍNDICE GENERAL

1. [TEMA 2: FUNDAMENTOS DEL LENGUAJE JAVASCRIPT Y NODE.JS](#tema-2-fundamentos-del-lenguaje-javascript-y-nodejs)
   - [1.1. Introducción y Características del Lenguaje](#11-introducción-y-características-del-lenguaje)
   - [1.2. Historia y Estándar ECMAScript](#12-historia-y-estándar-ecmascript)
   - [1.3. Especificación del Lenguaje vs APIs del Entorno](#13-especificación-del-lenguaje-vs-apis-del-entorno)
   - [1.4. Configuración del Entorno: Node.js, VS Code y prompt-sync](#14-configuración-del-entorno-nodejs-vs-code-y-prompt-sync)
   - [1.5. Estructura de un Archivo JS, Comentarios e Identificadores](#15-estructura-de-un-archivo-js-comentarios-e-identificadores)
   - [1.6. Tipos de Datos Primitivos vs Objetos](#16-tipos-de-datos-primitivos-vs-objetos)
   - [1.7. Números (Number, BigInt y Math) y el fallo IEEE 754](#17-números-number-bigint-y-math-y-el-fallo-ieee-754)
   - [1.8. Cadenas de Texto (Strings) y Plantillas Literales](#18-cadenas-de-texto-strings-y-plantillas-literales)
   - [1.9. Booleanos, Valores Falsy y Coerción de Tipos](#19-booleanos-valores-falsy-y-coerción-de-tipos)
   - [1.10. El Objeto Global: globalThis](#110-el-objeto-global-globalthis)
   - [1.11. Conversión de Tipos (Implícita vs Explícita)](#111-conversión-de-tipos-implícita-vs-explícita)
   - [1.12. Estructuras de Control, Bucles y Saltos](#112-estructuras-de-control-bucles-y-saltos)
   - [1.13. Declaración de Variables: var vs let vs const y Modo Estricto](#113-declaración-de-variables-var-vs-let-vs-const-y-modo-estricto)
   - [1.14. Estructuras de Datos: Array, Set y Map](#114-estructuras-de-datos-array-set-y-map)
   - [1.15. Funciones: Declaración, Expresiones, Flecha y Rest/Spread](#115-funciones-declaración-expresiones-flecha-y-restspread)
   - [1.16. Objetos en Profundidad: Propiedades, Métodos, Prototipos y JSON](#116-objetos-en-profundidad-propiedades-métodos-prototipos-y-json)
   - [1.17. Clases Modernas (ES6): Herencia, super y Campos Privados (#)](#117-clases-modernas-es6-herencia-super-y-campos-privados-)
   - [1.18. Módulos Nativos: export e import](#118-módulos-nativos-export-e-import)
   - [1.19. Ejercicios Resueltos del Tema 2 (Comentados línea a línea)](#119-ejercicios-resueltos-del-tema-2)
   - [1.20. Puntos fijos de examen (Tema 2)](#120-puntos-fijos-de-examen-tema-2)
2. [TEMA 3: JAVASCRIPT EN EL NAVEGADOR (BOM, DOM Y EVENTOS)](#tema-3-javascript-en-el-navegador-bom-dom-y-eventos)
   - [2.1. Arquitectura en el Cliente: BOM vs DOM](#21-arquitectura-en-el-cliente-bom-vs-dom)
   - [2.2. El BOM (Browser Object Model): window, location, history y navigator](#22-el-bom-browser-object-model-window-location-history-y-navigator)
   - [2.3. Inclusión y Carga de Scripts: async vs defer vs module](#23-inclusión-y-carga-de-scripts-async-vs-defer-vs-module)
   - [2.4. Ciclo de Ejecución, Modelo Monohilo (Single Thread) y window.onerror](#24-ciclo-de-ejecución-modelo-monohilo-single-thread-y-windowonerror)
   - [2.5. El DOM: Tipos de Nodos y Búsqueda en el Árbol](#25-el-dom-tipos-de-nodos-y-búsqueda-en-el-árbol)
   - [2.6. Manipulación del DOM: Crear, Modificar, Ocultar y Eliminar Elementos](#26-manipulación-del-dom-crear-modificar-ocultar-y-eliminar-elementos)
   - [2.7. El Sistema de Eventos: addEventListener y el Objeto Event](#27-el-sistema-de-eventos-addeventlistener-y-el-objeto-event)
   - [2.8. Cancelación (preventDefault) y Propagación (Bubbling vs stopPropagation)](#28-cancelación-preventdefault-y-propagación-bubbling-vs-stoppropagation)
   - [2.9. Biblioteca jQuery: Selector $(), Métodos y Eventos](#29-biblioteca-jquery-selector--métodos-y-eventos)
   - [2.10. Temporizadores y Evaluación Dinámica: setTimeout, clearTimeout y eval](#210-temporizadores-y-evaluación-dinámica-settimeout-cleartimeout-y-eval)
   - [2.11. Gráficos en el Cliente: API Canvas HTML5 y Canvas.js](#211-gráficos-en-el-cliente-api-canvas-html5-y-canvasjs)
   - [2.12. Ejercicios Resueltos del Tema 3 (Comentados línea a línea)](#212-ejercicios-resueltos-del-tema-3)
   - [2.13. Puntos fijos de examen (Tema 3)](#213-puntos-fijos-de-examen-tema-3)

---

# TEMA 2: FUNDAMENTOS DEL LENGUAJE JAVASCRIPT Y NODE.JS

## 1.1. Introducción y Características del Lenguaje

* **Analogía visual:** JavaScript es el motor de gasolina de un coche. No depende de la carrocería en la que esté montado. Si lo montas en un coche de calle (el navegador web), interactúa con las ruedas y el volante (el DOM). Si montas ese mismo motor dentro de una sierra industrial fija en un taller (Node.js), interactúa con las poleas y la madera del taller (el sistema de archivos del disco duro).
* **Las 3 características clave de JavaScript:**
  1. **Lenguaje de alto nivel:** No gestionas la memoria RAM ni punteros a bajo nivel; el lenguaje lo hace por ti.
  2. **Interpretado / JIT (Just-In-Time):** No requiere compilar previamente un archivo ejecutable `.exe`; el motor lee y ejecuta el código sobre la marcha.
  3. **Tipado dinámico y débil:** No se declara el tipo de dato al crear variables (`let x = 10; x = "hola";` es válido). La variable adopta el tipo del valor que almacena en cada momento.

---

## 1.2. Historia y Estándar ECMAScript

1. **Nacimiento (Netscape):** Creado originalmente por Brendan Eich en Netscape bajo el nombre de Mocha, luego LiveScript y finalmente bautizado como JavaScript por motivos de marketing aprovechando el tirón de Java.
2. **Marca registrada:** "JavaScript" es marca registrada de Sun Microsystems (adquirida posteriormente por Oracle). Netscape cedió la estandarización a la organización internacional **ECMA** (European Computer Manufacturers Association).
3. **ECMAScript:** Es el nombre oficial del estándar técnico. JavaScript es la implementación real de ese estándar.
4. **Hitos fundamentales:**
   * **ES5 (2010):** Estandarización soportada por la totalidad de navegadores modernos. Introdujo el modo estricto (`"use strict"`).
   * **ES6 / ES2015:** El mayor salto de la historia del lenguaje. Añadió clases (`class`), módulos (`import/export`), funciones flecha (`=>`), plantillas de texto y las palabras clave `let` y `const`.
   * **Ciclo anual (Desde 2015):** Se libera una especificación nueva cada año con el nombre del año correspondiente (ejemplo: ES2020 introdujo `BigInt` y `globalThis`).
5. **Modo estricto (`"use strict"`):** Activa un modo de compilación más riguroso en el motor. Impide usar variables sin declarar, prohíbe eliminar variables fijas y evita errores del pasado manteniendo la compatibilidad hacia atrás.

---

## 1.3. Especificación del Lenguaje vs APIs del Entorno

La programación en JavaScript se divide en dos bloques independientes:

```
┌─────────────────────────────────────────────────────────────┐
│              ESPECIFICACIÓN ECMASCRIPT (NÚCLEO)             │
│   Tipos primitivos, Arrays, Objetos, Math, Clases, Bucles   │
└──────────────────────────────┬──────────────────────────────┘
                               │
               ┌───────────────┴───────────────┐
               ▼                               ▼
┌─────────────────────────────┐ ┌─────────────────────────────┐
│       ENTORNO NAVEGADOR     │ │       ENTORNO NODE.JS       │
│  - Document Object (DOM)    │ │  - File System (fs)         │
│  - window, location         │ │  - Acceso a Red y SO        │
│  - Eventos de ratón/teclado │ │  - Entrada/salida consola   │
└─────────────────────────────┘ └─────────────────────────────┘
```

* **El Núcleo:** Es idéntico en todas partes (un bucle `for` o un `Array` funcionan exactamente igual en Node.js que en Chrome).
* **Las APIs del Entorno:** Dependen de dónde corra el código. En Node.js **no existe** `window` ni `document` (dará error de referencia). En el navegador **no existe** acceso directo al sistema de archivos local del cliente por motivos obvios de seguridad.

---

## 1.4. Configuración del Entorno: Node.js, VS Code y prompt-sync

Para ejecutar JavaScript fuera del navegador, se utiliza **Node.js** (basado en el motor ultra-rápido V8 de Google Chrome).

### Pasos de configuración:
1. **Instalación:** Descarga e instalación estándar de Node.js (versión LTS recomendada).
2. **Ejecución básica por consola:**
   ```bash
   node holamundo.js
   ```
3. **Instalación del paquete `prompt-sync`:**
   En Node.js, la entrada por consola no es síncrona por defecto (a diferencia del `Scanner` de Java). Para leer datos pausando la ejecución como en Java, se instala la dependencia:
   ```bash
   npm install prompt-sync
   ```
4. **Uso en código:**
   ```javascript
   // Carga el módulo descargado en la carpeta node_modules
   const prompt = require('prompt-sync')();
   // Pausa el programa y espera a que el usuario introduzca texto por teclado
   const usuario = prompt('Introduce tu nombre: ');
   ```

---

## 1.5. Estructura de un Archivo JS, Comentarios e Identificadores

* **Sensibilidad a mayúsculas (Case-sensitive):** La variable `total`, `Total` y `TOTAL` representan tres posiciones de memoria completamente diferentes.
* **Espacios en blanco y saltos de línea:** Son ignorados por el analizador sintáctico. Se utilizan libremente para indentar el código de forma legible.
* **Comentarios:**
  ```javascript
  // Comentario de una única línea
  /* Comentario tradicional de bloque */
  /**
   * Comentario de documentación (JSDoc)
   * Muy recomendado para documentar funciones
   */
  ```
* **Reglas para nombrar identificadores (variables, funciones, clases):**
  * **Primer carácter obligatorio:** Debe ser una letra (a-z, A-Z), un guion bajo (`_`) o el signo de dólar (`$`). **Nunca puede comenzar por un número** (ejemplo: `1variable` es error de sintaxis).
  * **Siguientes caracteres:** Pueden incluir letras, números, `_` y `$`.
  * **Palabras reservadas:** No pueden usarse como identificadores (`break`, `case`, `catch`, `class`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `function`, `if`, `import`, `in`, `instanceof`, `new`, `return`, `super`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with`, `yield`).
* **Punto y coma (`;`):** En JavaScript es opcional en la mayoría de contextos gracias a la inserción automática de punto y coma (ASI), pero **en clase y exámenes es norma de buenas prácticas incluirlo siempre** al final de cada sentencia para evitar ambigüedades.

---

## 1.6. Tipos de Datos Primitivos vs Objetos

En JavaScript los datos pertenecen a una de dos grandes familias:

1. **Tipos Primitivos (Inmutables, se pasan por valor):**
   * `number`: Enteros y decimales.
   * `bigint`: Enteros de precisión arbitraria.
   * `string`: Cadenas de caracteres.
   * `boolean`: `true` o `false`.
   * `null`: Ausencia deliberada de valor.
   * `undefined`: Variable creada pero sin valor asignado.
   * `symbol`: Identificadores únicos e inmutables (avanzado).
2. **Tipos Objeto (Mutables, se pasan por referencia):**
   * Todo lo que no sea primitivo es un objeto: `Object`, `Array`, `Date`, `Function`, `Map`, `Set`.

---

## 1.7. Números (Number, BigInt y Math) y el fallo IEEE 754

### El tipo `Number`:
Utiliza el estándar internacional **IEEE 754 de 64 bits (doble precisión)** para representar tanto números enteros como números decimales.
* **Rango seguro para enteros:** Desde `-9.007.199.254.740.992` hasta `9.007.199.254.740.992` (`Number.MIN_SAFE_INTEGER` a `Number.MAX_SAFE_INTEGER`).
* **Representación de bases numéricas:**
  ```javascript
  let decimal = 42;          // Base 10
  let hexadecimal = 0x2A;    // Base 16 (prefijo 0x)
  let binario = 0b101010;    // Base 2 (prefijo 0b)
  let octal = 0o52;          // Base 8 (prefijo 0o)
  let legible = 1_000_000;   // Separador de millares con guion bajo
  ```

### El gran fallo de precisión decimal:
* **Analogía visual:** En nuestro sistema decimal no podemos escribir exactamente un tercio ($1/3 = 0.333333...$ infinito). En el sistema binario del ordenador ocurre lo mismo con fracciones como $0.1$ o $0.2$. No tienen representación binaria finita.
* **Consecuencia:** `0.1 + 0.2 === 0.3` devuelve **`false`** en JavaScript (el resultado real en memoria es `0.30000000000000004`).
* **Solución de examen:** Usar `.toFixed(decimales)` para redondear a cadena de texto o multiplicar para operar en enteros y luego dividir.

### `BigInt`:
Introducido en ES2020 para números enteros astronómicamente grandes sin pérdida de precisión. Se declaran añadiendo una `n` al final:
```javascript
const enteroGigante = 9007199254740991123456789n;
```
*Regla de oro:* No se pueden mezclar variables `Number` y `BigInt` en una misma operación aritmética sin convertir una de ellas explícitamente.

---

## 1.8. Cadenas de Texto (Strings) y Plantillas Literales

Una cadena es una secuencia inmutable indexada desde `0`.
* **Delimitadores:** Se pueden usar comillas dobles (`"texto"`), simples (`'texto'`) o acentos graves (`` `texto` ``).
* **Caracteres de escape comunes:**
  * `\n`: Salto de línea.
  * `\t`: Tabulación horizontal.
  * `\"` o `\'`: Comilla escapada dentro de su mismo tipo.
  * `\\`: Barra invertida.

### Plantillas Literales (Template Strings - ES6):
Delimitadas con comillas invertidas (`` ` ``). Ofrecen tres ventajas revolucionarias:
1. **Interpolación directa de expresiones:** Se inyectan variables con la sintaxis `${expresión}` sin partir la cadena con operadores `+`.
2. **Cadenas multilínea nativas:** Permiten dar saltos de línea con el teclado dentro de la cadena sin usar `\n`.
3. **Incrustación de operadores ternarios:** `${aprobado ? 'Aprobado' : 'Suspenso'}`.

---

## 1.9. Booleanos, Valores Falsy y Coerción de Tipos

Un booleano solo puede valer `true` o `false`.

### La lista de los 6 valores Falsy (Memorizar para examen):
Al evaluarse dentro de un condicional `if()`, **únicamente estos 6 valores se convierten en `false`**:
1. `false`
2. `0` y `-0`
3. `""` (cadena vacía)
4. `null`
5. `undefined`
6. `NaN`

*Cualquier otro valor del universo de JavaScript (incluyendo arrays vacíos `[]`, objetos vacíos `{}` o el texto `"0"`) se convierte en `true`.*

---

## 1.10. El Objeto Global: globalThis

* En el navegador, el objeto raíz histórico es `window`.
* En Node.js, el objeto raíz histórico es `global`.
* **El estándar unificado moderno:** Para evitar escribir comprobaciones de entorno, ECMAScript introdujo **`globalThis`**, un identificador universal que apunta al objeto global en cualquier plataforma.

---

## 1.11. Conversión de Tipos (Implícita vs Explícita)

### Conversión Implícita (Coerción automática):
* **El operador `+`:** Si uno de los dos operandos es un `string`, convierte el otro operando en texto y **concatena** (`"5" + 2` produce `"52"`).
* **Los operadores `-`, `*`, `/`, `%`:** Siempre intentan convertir las cadenas en números matemáticos (`"10" - 2` produce el número `8`).

### Conversión Explícita (Recomendada en exámenes):
Se realiza llamando a las funciones constructoras globales como funciones de parseo:
```javascript
let num = Number("123");   // Convierte cadena a número
let str = String(123);     // Convierte número a cadena
let bool = Boolean(1);     // Convierte número a true
let boolRapido = !!"hola"; // El doble operador NOT convierte cualquier dato a booleano
```

---

## 1.12. Estructuras de Control, Bucles y Saltos

* **Condicionales:** `if`, `else if`, `else` idénticos a Java.
* **Selección múltiple:** `switch (expresion) { case val: ... break; default: ... }`.
* **Bucle `while` y `do...while`:** Evaluación previa o posterior de la condición.
* **Bucle `for` clásico:**
  ```javascript
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  ```
* **Bucle `for...of` (Para iterar valores):**
  Recorre **valores** de objetos iterables (Arrays, Strings, Sets, Maps):
  ```javascript
  for (let letra of "DAW") {
    console.log(letra); // Imprime 'D', luego 'A', luego 'W'
  }
  ```
* **Bucle `for...in` (Para iterar propiedades de objetos):**
  Recorre los **nombres de las claves** o propiedades de un objeto:
  ```javascript
  const coche = { marca: "Seat", modelo: "Ibiza" };
  for (let clave in coche) {
    console.log(clave); // Imprime "marca", luego "modelo"
  }
  ```
* **Saltos:** `break` (rompe el bucle actual), `continue` (salta a la siguiente iteración).
* **Control de excepciones:** `try { throw new Error("Aviso"); } catch (e) { console.log(e.message); } finally { /* siempre */ }`.

---

## 1.13. Declaración de Variables: var vs let vs const y Modo Estricto

| Característica | `var` (Antiguo) | `let` (Moderno) | `const` (Moderno) |
| :--- | :--- | :--- | :--- |
| **Ámbito (Scope)** | Función o global | Bloque `{ }` | Bloque `{ }` |
| **Hoisting (Elevación)** | Sí (se inicializa como `undefined`) | No accesible (Temporal Dead Zone) | No accesible (Temporal Dead Zone) |
| **Redeclaración** | Permitida (peligroso) | Error de sintaxis | Error de sintaxis |
| **Reasignación** | Permitida | Permitida | **Prohibida** |

*Regla de oro:* Declara todo con `const` por defecto. Si el valor necesita cambiar obligatoriamente a lo largo del programa (como un contador), usa `let`. **Nunca uses `var`.**

---

## 1.14. Estructuras de Datos: Array, Set y Map

### Array (Listas indexadas):
Colección ordenada indexada desde 0. Métodos comunes: `.push(elem)` (añade al final), `.pop()` (quita del final), `.length` (longitud).

### Set (Conjunto de valores únicos):
No permite duplicados de ningún tipo.
```javascript
const conjunto = new Set([1, 2, 2, 3]); // Almacena únicamente 1, 2 y 3
conjunto.add(4);                        // Añade el 4
conjunto.has(2);                        // Devuelve true
```

### Map (Pares clave-valor avanzados):
Acepta cualquier tipo de dato como clave (incluso objetos), a diferencia de los objetos comunes cuyas claves son siempre strings o símbolos.
```javascript
const mapa = new Map();
mapa.set("clave1", "valor1"); // Guarda el par
mapa.get("clave1");           // Recupera "valor1"
```

---

## 1.15. Funciones: Declaración, Expresiones, Flecha y Rest/Spread

### 1. Declaración formal (Tiene Hoisting, se puede llamar antes de escribirla):
```javascript
function sumar(a, b) {
  return a + b;
}
```

### 2. Expresión de función (Asignada a variable, no tiene hoisting):
```javascript
const sumar = function(a, b) {
  return a + b;
};
```

### 3. Funciones Flecha (Arrow Functions - ES6):
Sintaxis limpia. Si tiene una sola sentencia de retorno, se suprimen las llaves `{ }` y la palabra `return`:
```javascript
// Versión compacta
const sumar = (a, b) => a + b;
```

### 4. Parámetros Rest (`...`) y Operador Spread (`...`):
* **Parámetros Rest (Empaquetar):** Recoge argumentos infinitos dentro de un array real.
  ```javascript
  function sumarTodo(...numeros) {
    return numeros.reduce((acum, n) => acum + n, 0);
  }
  ```
* **Operador Spread (Desempaquetar):** Esparce los elementos de un array individualmente.
  ```javascript
  const lista = [4, 9, 2];
  const maximo = Math.max(...lista); // Equivale a Math.max(4, 9, 2)
  ```

---

## 1.16. Objetos en Profundidad: Propiedades, Métodos, Prototipos y JSON

* **Definición:** Colección desordenada de pares clave-valor (diccionario o array asociativo).
* **Acceso a propiedades:** Por punto (`obj.nombre`) o por corchetes con cadena (`obj["nombre"]`). El acceso por corchetes permite nombres calculados en variables.
* **Operaciones básicas:**
  * Comprobar existencia: `"nombre" in obj` o `obj.hasOwnProperty("nombre")`.
  * Borrar propiedades: `delete obj.nombre;`.
  * Obtener claves: `Object.keys(obj)`.
* **Serialización JSON:**
  * `JSON.stringify(objeto)`: Convierte un objeto en memoria a texto plano JSON para transmitir por red.
  * `JSON.parse(cadenaTexto)`: Convierte un texto JSON recibido a objeto manipulable en JavaScript.

---

## 1.17. Clases Modernas (ES6): Herencia, super y Campos Privados (#)

Las clases en JavaScript son una capa sintáctica elegante construida sobre el sistema nativo de prototipos.

* **Estructura básica:** Constructor para atributos y métodos fuera del constructor.
* **Herencia con `extends`:** La subclase hereda todo del padre.
* **Llamada a `super()`:** Obligatorio en la primera línea del constructor hijo para construir la instancia base.
* **Campos privados nativos (`#`):** Introducidos para garantizar encapsulamiento real impuesto por el motor JS. Si intentas leer `#campoPrivado` fuera de la clase, el motor lanza un error de sintaxis en tiempo de ejecución.

---

## 1.18. Módulos Nativos: export e import

Dividen el código en ficheros independientes y reutilizables.
* **Exportar:** `export const variable = 10;` o `export function test() {}`.
* **Importar:** `import { variable, test } from './modulo.js';`.
* **Reglas obligatorias:**
  1. Siempre se ejecutan en **modo estricto** de forma automática.
  2. En el navegador exigen la etiqueta `<script type="module" src="...">`.
  3. Los módulos cargan por defecto en modo **diferido** (`defer`).

---

## 1.19. Ejercicios Resueltos del Tema 2

### Ejercicio 1 (Tema 2): El fallo de coma flotante y acumulación
**Enunciado:** Define una variable acumuladora en 0. Suma a esa variable el valor 0.1 un total de 1000 veces consecutivas dentro de un bucle. Muestra el resultado real en memoria y luego el resultado redondeado a 2 decimales para corregir el desfase binario.

```javascript
// Paso 1: Declaramos la variable acumuladora usando let porque su valor mutará en cada vuelta
let acumulador = 0;

// Paso 2: Creamos el bucle for para repetir la instrucción exactamente 1000 veces
for (let vuelta = 0; vuelta < 1000; vuelta++) {
  // Sumamos 0.1 al valor que ya teníamos acumulado en la memoria
  acumulador = acumulador + 0.1;
}

// Paso 3: Mostramos el valor sin formato para observar el fallo del estándar IEEE 754 (da 99.99999999999858)
console.log("Resultado crudo con error de precisión: " + acumulador);

// Paso 4: Usamos toFixed(2) para forzar un redondeo a dos decimales y devolver una cadena limpia
const resultadoLimpio = acumulador.toFixed(2);

// Paso 5: Mostramos el resultado corregido legible para el usuario humano (100.00)
console.log("Resultado corregido con toFixed: " + resultadoLimpio);
```

---

### Ejercicio 2 (Tema 2): Generación y Análisis de un Array de Datos
**Enunciado:** Genera un array con 10 números enteros aleatorios del 1 al 100. Muestra cada número con su índice. Recorre el array una sola vez para determinar el número menor, el número mayor, cuántos pares hay y la media aritmética de todos.

```javascript
// Paso 1: Inicializamos un array vacío para llenarlo posteriormente
const coleccionNumeros = [];

// Paso 2: Llenamos el array con 10 números aleatorios usando Math.random() del 1 al 100
for (let indice = 0; indice < 10; indice++) {
  // Generamos un entero entre 1 y 100 y lo añadimos al final del array con push
  coleccionNumeros.push(Math.floor(Math.random() * 100) + 1);
}

// Paso 3: Mostramos los elementos indicando su índice correspondiente
console.log("Valores almacenados en el array:");
for (let i = 0; i < coleccionNumeros.length; i++) {
  // Mostramos el índice actual y el valor alojado en dicha casilla de memoria
  console.log("Índice [" + i + "] = " + coleccionNumeros[i]);
}

// Paso 4: Inicializamos las variables de cálculo con la primera casilla del array
let valorMenor = coleccionNumeros[0];
let valorMayor = coleccionNumeros[0];
let sumaAcumulada = 0;
let conteoPares = 0;

// Paso 5: Recorremos el array en una sola pasada usando for...of para evaluar los datos
for (let num of coleccionNumeros) {
  // Acumulamos el valor del número actual para la media matemática
  sumaAcumulada = sumaAcumulada + num;

  // Si el número evaluado es menor al que teníamos guardado, actualizamos la variable menor
  if (num < valorMenor) {
    valorMenor = num;
  }

  // Si el número evaluado es mayor al que teníamos guardado, actualizamos la variable mayor
  if (num > valorMayor) {
    valorMayor = num;
  }

  // Comprobamos si el número es par evaluando el resto de dividir entre 2 mediante el operador %
  if (num % 2 === 0) {
    // Incrementamos el contador de pares en uno
    conteoPares = conteoPares + 1;
  }
}

// Paso 6: Calculamos la media dividiendo la suma entre el número total de elementos (.length)
const mediaAritmetica = sumaAcumulada / coleccionNumeros.length;

// Paso 7: Imprimimos el cuadro de resultados finales por consola
console.log("--- RESULTADOS DEL ANÁLISIS ---");
console.log("Número menor encontrado: " + valorMenor);
console.log("Número mayor encontrado: " + valorMayor);
console.log("Cantidad de números pares: " + conteoPares);
console.log("Media aritmética calculada: " + mediaAritmetica);
```

---

### Ejercicio 3 (Tema 2): Jerarquía de Clases y Encapsulamiento Privado
**Enunciado:** Construye una clase `Vehiculo` con marca, modelo y un atributo privado `#kilometros`. Incluye un método para registrar kilómetros recorridos y un getter para consultarlos. Extiende la clase con `CocheElectrico`, añadiendo la capacidad de batería en kWh y sobrescribiendo el método descriptivo llamando a `super`.

```javascript
// Paso 1: Declaramos la clase base Vehiculo utilizando la palabra reservada class
class Vehiculo {
  // Definimos un campo privado con la almohadilla (#) para que no sea manipulable desde fuera
  #kilometros;

  // El método constructor recibe la marca y el modelo al instanciar con new
  constructor(marcaAsignada, modeloAsignado) {
    // Asignamos la marca a la propiedad pública de la instancia usando this
    this.marca = marcaAsignada;
    // Asignamos el modelo a la propiedad pública de la instancia
    this.modelo = modeloAsignado;
    // Inicializamos el atributo privado de kilómetros obligatoriamente en 0
    this.#kilometros = 0;
  }

  // Método público para incrementar los kilómetros de forma controlada
  hacerViaje(kmRecorridos) {
    // Sumamos la distancia recorrida a nuestro contador privado interno
    this.#kilometros = this.#kilometros + kmRecorridos;
  }

  // Declaramos un getter para poder consultar los kilómetros privados desde el exterior
  get kilometraje() {
    // Retornamos el valor almacenado en la propiedad privada
    return this.#kilometros;
  }

  // Método que genera una cadena de texto descriptiva del vehículo
  describir() {
    // Interpolamos los datos básicos para devolver un resumen en texto plano
    return `Vehículo: ${this.marca} ${this.modelo} | Km: ${this.#kilometros}`;
  }
}

// Paso 2: Creamos la subclase CocheElectrico heredando de Vehiculo mediante extends
class CocheElectrico extends Vehiculo {
  // Constructor que recibe datos del padre más la batería específica
  constructor(marcaAsignada, modeloAsignado, capacidadBateriaKw) {
    // Invocamos al constructor de la clase padre pasándole marca y modelo mediante super()
    super(marcaAsignada, modeloAsignado);
    // Asignamos la propiedad propia de batería a la nueva instancia
    this.bateria = capacidadBateriaKw;
  }

  // Sobrescribimos el método describir para complementar la información del vehículo
  describir() {
    // Obtenemos el texto base del padre llamando a su versión con super.describir()
    const fichaBase = super.describir();
    // Añadimos el dato propio de la batería y retornamos la cadena final
    return `${fichaBase} | Batería: ${this.bateria} kWh`;
  }
}

// Paso 3: Instanciamos un coche eléctrico utilizando el operador new
const miTesla = new CocheElectrico("Tesla", "Model 3", 75);

// Paso 4: Simulamos un trayecto usando el método heredado del padre
miTesla.hacerViaje(150);

// Paso 5: Mostramos la descripción por pantalla llamando al método sobrescrito
console.log(miTesla.describir());
```

---

## 1.20. Puntos fijos de examen (Tema 2)
1. **Diferencias críticas entre `var`, `let` y `const`:** Tienes que saber justificar que `var` tiene ámbito de función y hoisting peligroso, mientras que `let` y `const` tienen ámbito de bloque `{ }`. `const` impide la reasignación de la variable.
2. **Comparación estricta `===` frente a `==`:** El operador `==` fuerza conversiones de tipo implícitas (`0 == false` es `true`). El operador `===` exige identidad estricta de tipo y contenido (`0 === false` es `false`).
3. **El fallo numérico binario:** JS representa los números mediante coma flotante IEEE 754 de 64 bits. Ciertos decimales como `0.1` son periódicos en binario, generando desajustes de precisión que se corrigen mediante `.toFixed()`.

---
---

# TEMA 3: JAVASCRIPT EN EL NAVEGADOR (BOM, DOM Y EVENTOS)

## 2.1. Arquitectura en el Cliente: BOM vs DOM

Cuando una página se carga en un navegador, se crean dos modelos de objetos en memoria:

```
                      WINDOW (Objeto Global / Raíz BOM)
                       ├── location (URL del navegador)
                       ├── history (Historial de navegación)
                       ├── navigator (Datos del navegador / SO)
                       │
                       └── DOCUMENT (Raíz del DOM)
                            └── html
                                 ├── head (title, meta...)
                                 └── body
                                      ├── h1
                                      ├── p
                                      └── form (inputs, buttons...)
```

* **BOM (Browser Object Model):** Son las herramientas de la ventana del navegador. No tienen nada que ver con el contenido del documento HTML en sí.
* **DOM (Document Object Model):** Es la representación en árbol vivo de todos los elementos HTML cargados dentro de la página. Permite a JavaScript leer, modificar, inyectar o borrar etiquetas en tiempo real.

---

## 2.2. El BOM (Browser Object Model): window, location, history y navigator

* **`window`:** Es el objeto supremo en el navegador. Todas las variables globales y funciones declaradas en scripts normales se convierten en propiedades de `window`. Posee un puntero circular hacia sí mismo (`window.window === window`).
  * `window.alert("Mensaje")`: Muestra cuadro modal bloqueante.
  * `window.confirm("¿Seguro?")`: Devuelve `true` si el usuario pulsa Aceptar.
* **`window.location`:** Controla la barra de direcciones del navegador.
  * `location.href`: Devuelve la URL actual completa.
  * `location.assign("https://google.com")`: Carga una página nueva en el navegador.
  * `location.reload()`: Recarga la página actual.
* **`window.history`:** Historial de navegación de la sesión de la pestaña actual.
  * `history.back()`: Equivale a pulsar el botón atrás del navegador.
  * `history.forward()`: Equivale a pulsar el botón adelante.
* **`window.navigator`:** Contiene información técnica del software del cliente.
  * `navigator.userAgent`: Cadena de texto con versión del navegador y sistema operativo.

---

## 2.3. Inclusión y Carga de Scripts: async vs defer vs module

Por defecto, cuando el navegador encuentra una etiqueta `<script src="archivo.js"></script>`, **se detiene por completo el análisis del HTML**, descarga el archivo y lo ejecuta inmediatamente. Esto congela la pantalla del usuario.

Para solucionarlo, existen dos atributos esenciales:

```
HTML Parsing:    ====================[ PAUSA ]=================> (Termina DOM)
Script Normal:                       [Descarga][Ejecuta]

HTML Parsing:    ==============================================> (Termina DOM)
Script async:    ----[Descarga]---->[Ejecuta (Interrumpe HTML)]

HTML Parsing:    ==============================================> (Termina DOM)
Script defer:    ----[Descarga en 2º plano]--------------------> [Ejecuta en orden]
```

* **`async`:** El archivo se descarga en segundo plano. **En el instante en que termina de descargarse, frena el parseo de HTML y se ejecuta de inmediato.**
  * *Problema:* Si tienes dos scripts con `async`, no se garantiza cuál terminará de descargarse primero. No sirve para scripts que dependen de otros.
* **`defer` (El estándar recomendado en clase):** El archivo se descarga en segundo plano sin frenar el análisis del documento HTML. **Se ejecuta únicamente cuando el documento HTML se ha analizado por completo**, y siempre en el orden secuencial en el que fueron escritos en el HTML.
* **`type="module"`:** Los scripts de tipo módulo se cargan automáticamente con comportamiento diferido (`defer`) de serie.

---

## 2.4. Ciclo de Ejecución, Modelo Monohilo (Single Thread) y window.onerror

* **Fases del ciclo de vida en el cliente:**
  1. **Fase de carga:** Se descargan y leen los scripts HTML/JS.
  2. **Fase de inicialización:** Se ejecutan los códigos principales que declaran variables y asignan escuchadores.
  3. **Fase guiada por eventos:** El programa se queda en reposo absoluto esperando a que el usuario haga clic, mueva el ratón o envíe un formulario para ejecutar funciones concretas.
* **Modelo Monohilo:** JavaScript en el navegador ejecuta su código en **un solo hilo de ejecución**. Dos funciones controladoras jamás se ejecutarán exactamente en el mismo instante. Si una función hace un cálculo muy pesado (bucle de 10 segundos), el navegador entero se congelará.
* **Gestión global de fallos con `window.onerror`:**
  Si un error imprevisto salta en cualquier punto del script y no es capturado con `try...catch`, el navegador llama a la función asignada a `window.onerror`, permitiendo capturar el error sin que la página web colapse por completo.

---

## 2.5. El DOM: Tipos de Nodos y Búsqueda en el Árbol

### Tipos de nodos principales:
* **Document:** La raíz del documento (`document`).
* **Element:** Cada etiqueta HTML (`<div>`, `<p>`, `<input>`).
* **Text:** El texto escrito dentro de una etiqueta.
* **Attr:** Los atributos de una etiqueta (`id`, `class`, `src`).

### Métodos para buscar nodos en el documento (Aprender de memoria):
* `document.getElementById("miId")`: Devuelve un único elemento cuyo atributo `id` coincida. Es el más rápido y utilizado.
* `document.querySelector("selectorCSS")`: Devuelve el primer elemento que cumpla con cualquier regla CSS (ejemplo: `.rojo`, `#menu > li`).
* `document.querySelectorAll("selectorCSS")`: Devuelve una lista estática (`NodeList`) con todos los elementos que cumplan el patrón.
* `document.getElementsByClassName("clase")`: Devuelve una colección viva con los elementos que tengan esa clase CSS.
* `document.getElementsByTagName("p")`: Devuelve todos los párrafos.

---

## 2.6. Manipulación del DOM: Crear, Modificar, Ocultar y Eliminar Elementos

### 1. Leer y modificar contenido:
* `elemento.textContent`: Lee o escribe texto plano dentro de la etiqueta. Es seguro y rápido.
* `elemento.innerHTML`: Interpreta etiquetas HTML dentro del contenido. **Peligro:** Si inyectas texto escrito por usuarios mediante `innerHTML` puedes abrir brechas de seguridad (inyección XSS).
* `input.value`: Lee o escribe lo que el usuario ha tecleado dentro de una caja de formulario (`<input>`, `<select>`, `<textarea>`).

### 2. Crear y añadir elementos al documento:
```javascript
// 1. Fabricamos la etiqueta en la memoria RAM
let nuevoParrafo = document.createElement("p");
// 2. Le asignamos contenido textual
nuevoParrafo.textContent = "Texto generado";
// 3. Lo colgamos del elemento body para que aparezca en pantalla
document.body.appendChild(nuevoParrafo);
```

### 3. Eliminar elementos:
```javascript
let elemento = document.getElementById("borrame");
elemento.remove(); // Método moderno directo
```

### 4. Deshabilitar y Ocultar:
* **Deshabilitar controles:** `input.disabled = true;` (desactiva el campo e impide que se pueda escribir o pulsar).
* **Ocultar conservando el hueco en el diseño:** `elemento.style.visibility = "hidden";` (para volver a mostrar: `"visible"`).
* **Ocultar eliminando el hueco en el diseño:** `elemento.style.display = "none";` (para volver a mostrar: `"block"`).

---

## 2.7. El Sistema de Eventos: addEventListener y el Objeto Event

### Las dos formas de asociar eventos:
1. **Atributo en línea en HTML (Mala práctica):** `<button onclick="hacerAlgo()">`. Mezcla estructura con programación.
2. **Programática con `addEventListener` (Buena práctica recomendada en exámenes):**
   ```javascript
   const boton = document.getElementById("miBoton");
   boton.addEventListener("click", miFuncionControladora);
   ```

### El objeto `Event`:
Cuando un evento se dispara, el navegador genera automáticamente un objeto con información detallada de lo ocurrido y lo envía como primer parámetro a la función gestora:
```javascript
function manejarClic(evento) {
  console.log("Coordenada X del ratón: " + evento.clientX);
  console.log("Elemento que recibió el clic: " + evento.target);
}
```

### Eventos más comunes:
* **Ratón:** `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout`.
* **Teclado:** `keydown` (al pulsar cualquier tecla física), `keyup` (al soltarla), `keypress` (teclas de caracteres imprimibles).
* **Formularios:** `submit` (al enviar), `change` (al modificar un valor y salir del campo), `focus` (al entrar el cursor), `blur` (al salir el cursor).
* **Ventana:** `load` (cuando la página y todas sus imágenes terminaron de cargar).

---

## 2.8. Cancelación (preventDefault) y Propagación (Bubbling vs stopPropagation)

### Cancelación del comportamiento por defecto con `preventDefault()`:
Muchos eventos del navegador tienen una acción programada de serie por el fabricante:
* Enviar un formulario con `submit` provoca que la página se recargue por completo.
* Hacer clic en `<a href="...">` navega a otra URL.
* Llamando a `evento.preventDefault()` **cancelamos esa acción nativa**, permitiendo validar formularios con JavaScript en la misma página sin recargarla.

### Propagación de eventos (Bubbling o Fase de Burbuja):
* **Analogía visual:** Imagina un botón sumergido en el fondo de un acuario. Al pulsar el botón, desprendes una burbuja de aire. La burbuja sube pasando por el contenedor `<div>`, luego por el `<body>` y finalmente llega a la superficie (`window`).
* Si el botón y el `<div>` tienen ambos un evento `click`, **al pulsar el botón se disparará primero el suyo y de inmediato el del contenedor**.
* **Cómo frenar la burbuja:** Llamando a `evento.stopPropagation()`, el evento se detiene en ese elemento y no sigue ascendiendo hacia los padres.

---

## 2.9. Biblioteca jQuery: Selector $(), Métodos y Eventos

jQuery es una biblioteca que simplifica drásticamente la sintaxis clásica de JavaScript en el navegador mediante el selector universal `$()`.

* **El selector `$()`:** Equivale a un selector CSS integrado:
  ```javascript
  let boton = $("#miId");      // Selección por ID
  let parrafos = $(".resaltado"); // Selección por clase
  ```
* **Manipulación rápida:**
  * `.val()`: Lee o escribe el atributo value de formularios (`$("input").val("Hola")`).
  * `.text()`: Equivale a `textContent`.
  * `.html()`: Equivale a `innerHTML`.
  * `.css("color", "red")`: Cambia propiedades de diseño.
  * `.append("<p>Texto</p>")`: Inserta contenido al final.
  * `.remove()`: Destruye el elemento.
* **Eventos en jQuery:**
  ```javascript
  // Esperar a que el DOM esté listo
  $(document).ready(function() {
    $("#btn").on("click", function() {
      alert("Clic capturado");
    });
  });
  ```

---

## 2.10. Temporizadores y Evaluación Dinámica: setTimeout, clearTimeout y eval

* **`setTimeout(funcion, milisegundos)`:** Programa la ejecución retardada de una función una sola vez tras esperar el tiempo indicado:
  ```javascript
  let temporizador = setTimeout(() => {
    console.log("Han pasado 3 segundos");
  }, 3000);
  ```
* **`clearTimeout(temporizador)`:** Cancela la cuenta atrás antes de que la función llegue a ejecutarse.
* **`eval(cadenaTexto)`:** Función peligrosa que toma una cadena de texto y la ejecuta como si fuera código JavaScript real. **Desaconsejada por motivos críticos de rendimiento y seguridad.**

---

## 2.11. Gráficos en el Cliente: API Canvas HTML5 y Canvas.js

* **Etiqueta `<canvas>`:** Proporciona un lienzo de píxeles en blanco dentro del HTML sobre el que JavaScript puede pintar de forma programática.
  ```html
  <canvas id="miLienzo" width="300" height="200"></canvas>
  ```
* **Obtención del Contexto:** El elemento canvas por sí mismo es solo el marco. Para poder dibujar formas geométricas, es obligatorio solicitar un contexto de dibujo con `.getContext()`:
  ```javascript
  const canvas = document.getElementById("miLienzo");
  const ctx = canvas.getContext("2d"); // Obtenemos el pincel para pintar en 2D
  ctx.fillStyle = "red";             // Color de pintura rojo
  ctx.fillRect(10, 10, 100, 50);     // Dibuja un rectángulo (x, y, ancho, alto)
  ```
* **Biblioteca Canvas.js:** Biblioteca externa que automatiza la creación de gráficas de barras, sectores o líneas en el cliente simplemente pasando un array de objetos con puntos de datos (`dataPoints`).

---

## 2.12. Ejercicios Resueltos del Tema 3

### Ejercicio 1 (Tema 3): Formulario calculador con conmutación de estado
**Enunciado:** Construye una página HTML completa con dos inputs para introducir números, un botón para sumar los valores mostrando el resultado en un párrafo, y un botón secundario que conmute la activación de los campos (si están activos los bloquea con `disabled`, si están bloqueados los activa).

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Definición del juego de caracteres estándar para evitar errores con tildes -->
  <meta charset="UTF-8">
  <!-- Título representativo de la página web -->
  <title>Ejercicio 1 - Calculadora con Bloqueo</title>
</head>
<body>

  <!-- Input de entrada para el primer operador numérico -->
  <input type="text" id="campoA" placeholder="Primer operando">

  <!-- Input de entrada para el segundo operador numérico -->
  <input type="text" id="campoB" placeholder="Segundo operando">

  <!-- Botón que desencadena el cálculo aritmético -->
  <button id="btnSumar">Sumar</button>

  <!-- Botón para alternar el bloqueo de los campos -->
  <button id="btnBloquear">Bloquear / Desbloquear</button>

  <!-- Párrafo para mostrar el total calculado -->
  <p id="parrafoTotal">Total: 0</p>

  <script>
    // Localizamos en memoria el primer input mediante su identificador único
    const inputUno = document.getElementById("campoA");

    // Localizamos en memoria el segundo input por su ID
    const inputDos = document.getElementById("campoB");

    // Localizamos el botón responsable de ejecutar la suma
    const botonCalcular = document.getElementById("btnSumar");

    // Localizamos el botón responsable de cambiar el estado de bloqueo
    const botonConmutar = document.getElementById("btnBloquear");

    // Localizamos el párrafo donde mostraremos el resultado escrito
    const textoSalida = document.getElementById("parrafoTotal");

    // Función que procesa los datos y efectúa la suma
    function ejecutarSuma() {
      // Convertimos el valor textual del primer input a dato numérico con Number()
      const n1 = Number(inputUno.value);

      // Convertimos el valor textual del segundo input a dato numérico
      const n2 = Number(inputDos.value);

      // Realizamos la suma aritmética de los dos operandos numéricos limpios
      const total = n1 + n2;

      // Volcamos el resultado dentro del párrafo utilizando la propiedad textContent
      textoSalida.textContent = "Total: " + total;
    }

    // Función que invierte el estado de activación de los campos de texto
    function conmutarCampos() {
      // Invertimos el booleano actual de la propiedad disabled con el operador !
      inputUno.disabled = !inputUno.disabled;

      // Invertimos exactamente igual la propiedad disabled del segundo campo
      inputDos.disabled = !inputDos.disabled;
    }

    // Vinculamos la pulsación del botón de suma con su función controladora
    botonCalcular.addEventListener("click", ejecutarSuma);

    // Vinculamos la pulsación del botón de bloqueo con su función controladora
    botonConmutar.addEventListener("click", conmutarCampos);
  </script>
</body>
</html>
```

---

### Ejercicio 2 (Tema 3): Creación y Destrucción Dinámica de Nodos DOM
**Enunciado:** Desarrolla una aplicación web donde el usuario escriba una tarea en un input y, al pulsar un botón "Añadir", se fabrique dinámicamente un nodo `<li>` dentro de un `<ul>`. Cada `<li>` debe incluir el texto de la tarea y un botón propio "Eliminar" que, al ser pulsado, borre únicamente esa fila de la lista.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Definición estándar de codificación de caracteres -->
  <meta charset="UTF-8">
  <!-- Título identificativo de la aplicación en la pestaña -->
  <title>Ejercicio 2 - Gestor Dinámico de Tareas</title>
</head>
<body>

  <!-- Caja de texto donde el usuario introduce la descripción del elemento -->
  <input type="text" id="textoNuevaTarea" placeholder="Escribe un elemento">

  <!-- Botón que pone en marcha la fabricación del nodo -->
  <button id="btnInsertar">Añadir a la lista</button>

  <!-- Lista desordenada que ejercerá de elemento contenedor padre -->
  <ul id="listaContenedor"></ul>

  <script>
    // Obtenemos la referencia al campo de entrada de texto mediante su ID
    const entradaTexto = document.getElementById("textoNuevaTarea");

    // Obtenemos la referencia al botón de inserción
    const botonInsertar = document.getElementById("btnInsertar");

    // Obtenemos la referencia al elemento contenedor <ul>
    const contenedorUl = document.getElementById("listaContenedor");

    // Función controladora para fabricar y enlazar los elementos en el DOM
    function crearElementoLista() {
      // Extraemos la cadena de texto tecleada por el usuario
      const valorIngresado = entradaTexto.value;

      // Comprobamos si el campo está vacío para rechazar entradas en blanco
      if (valorIngresado === "") {
        // Interrumpimos la ejecución de la función de forma inmediata con return
        return;
      }

      // Paso 1: Creamos un nuevo nodo de elemento <li> en la memoria mediante createElement
      const nuevoLi = document.createElement("li");

      // Asignamos el texto escrito por el usuario como contenido del nuevo <li>
      nuevoLi.textContent = valorIngresado + " ";

      // Paso 2: Creamos en memoria un botón de borrado exclusivo para este elemento
      const botonBorrar = document.createElement("button");

      // Establecemos el rótulo visible en el botón de eliminación
      botonBorrar.textContent = "Eliminar";

      // Asignamos un escuchador de eventos click exclusivo a este botón fabricado
      botonBorrar.addEventListener("click", function() {
        // La instrucción remove() desconecta y destruye este <li> del árbol visual
        nuevoLi.remove();
      });

      // Paso 3: Introducimos el botón de borrado como nodo hijo dentro del <li>
      nuevoLi.appendChild(botonBorrar);

      // Paso 4: Introducimos el elemento <li> completo dentro de la lista <ul>
      contenedorUl.appendChild(nuevoLi);

      // Paso 5: Vaciamos el campo de entrada de texto para dejarlo listo para otra tarea
      entradaTexto.value = "";
    }

    // Conectamos el clic del botón principal a la función de creación
    botonInsertar.addEventListener("click", crearElementoLista);
  </script>
</body>
</html>
```

---

### Ejercicio 3 (Tema 3): Validación de Formulario con `preventDefault` y Estilos
**Enunciado:** Crea un formulario con un campo de contraseña. Al enviar con `submit`, valida que tenga al menos 6 caracteres. Si no los tiene, cancela el envío del formulario, pinta el borde del input en rojo y muestra un texto de advertencia. Si la longitud es correcta, cambia el borde a verde y limpia el mensaje de error.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Juego de caracteres UTF-8 -->
  <meta charset="UTF-8">
  <!-- Título del documento -->
  <title>Ejercicio 3 - Validación con preventDefault</title>
</head>
<body>

  <!-- Etiqueta form con su identificador para poder escuchar su envío -->
  <form id="formularioLogin">
    <!-- Input de tipo password para introducir la clave oculta -->
    <input type="password" id="claveAcceso" placeholder="Mínimo 6 caracteres">
    <!-- Botón de envío estándar que lanza el evento submit del formulario -->
    <button type="submit" id="btnEnviar">Iniciar Sesión</button>
  </form>

  <!-- Párrafo reservado para renderizar advertencias de validación en color rojo -->
  <p id="mensajeError" style="color: red;"></p>

  <script>
    // Obtenemos la referencia directa al formulario completo por su ID
    const miForm = document.getElementById("formularioLogin");

    // Obtenemos la referencia al campo de entrada de la contraseña
    const inputClave = document.getElementById("claveAcceso");

    // Obtenemos la referencia al párrafo destinado a mostrar las alertas
    const parrafoAlerta = document.getElementById("mensajeError");

    // Escuchamos el evento 'submit' que emite el formulario al intentar despacharse
    miForm.addEventListener("submit", function(eventoDisparado) {
      // Verificamos si la longitud de la cadena tecleada (.length) es menor a 6 caracteres
      if (inputClave.value.length < 6) {
        // preventDefault() frena en seco el comportamiento por defecto de recargar la página
        eventoDisparado.preventDefault();

        // Modificamos directamente el estilo visual del borde a 2px sólido de color rojo
        inputClave.style.border = "2px solid red";

        // Introducimos el mensaje explicativo dentro del párrafo de aviso
        parrafoAlerta.textContent = "Error: La contraseña debe tener como mínimo 6 caracteres.";
      } else {
        // Si cumple la regla de validación, pintamos el borde en verde indicando corrección
        inputClave.style.border = "2px solid green";

        // Vaciamos el texto de error para eliminar avisos antiguos
        parrafoAlerta.textContent = "";
      }
    });
  </script>
</body>
</html>
```

---

## 2.13. Puntos fijos de examen (Tema 3)
1. **La conversión indispensable de `.value`:** Los campos de texto `<input>` devuelven siempre cadenas de texto (`string`). Si haces sumas directas sin envolverlos con `Number(campo.value)`, JavaScript concatenará los caracteres en lugar de sumar cantidades matemáticas (`"2" + "3" = "23"`).
2. **El método `evento.preventDefault()`:** Es obligatorio explicar que cancela la acción que el navegador ejecuta de forma nativa ante un suceso, como evitar el refresco de la página al despachar un formulario mediante `submit` o impedir que un enlace `<a>` navegue a otra URL.
3. **Carga controlada con `defer` frente a `async`:** Ambos descargan el script en segundo plano sin frenar el análisis del HTML. `async` interrumpe el análisis del HTML para ejecutarse en cuanto termina de descargarse (sin respetar el orden de aparición de los scripts), mientras que `defer` aguarda a que el árbol DOM esté completamente analizado y respeta con total rigurosidad el orden secuencial de los archivos.
