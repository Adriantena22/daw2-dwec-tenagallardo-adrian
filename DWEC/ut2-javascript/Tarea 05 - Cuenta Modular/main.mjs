import Cuenta from "./cuenta.mjs";

let cuenta1 = new Cuenta("Adrián", 200);

cuenta1.ingresar(100);
console.log("Después de ingresar 100: ", cuenta1.cantidad);

cuenta1.retirar(10);
console.log("Después de retirar 10: ", cuenta1.cantidad);

cuenta1.retirar(10);
console.log("Después de retirar 10 más: ", cuenta1.cantidad);