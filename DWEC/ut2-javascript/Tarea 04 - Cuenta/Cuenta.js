class Cuenta {
    constructor(titular, cantidad = 0) {
        this._titular = titular;
        this._cantidad = cantidad;
    }

    get titular() {
        return this._titular;
    }

    set titular(nuevoTitular) {
        this._titular = nuevoTitular;
    }

    get cantidad() {
        return this._cantidad;
    }

    set cantidad(nuevaCantidad) {
        this._cantidad = nuevaCantidad;
    }

    toString() {
        return `Cuenta [titular: ${this.titular}, Saldo: ${this.cantidad}€]`;
    }

    ingresar(cantidad) {
        if (cantidad > 0) {
            this.cantidad += cantidad;
        }
    }

    retirar(cantidad) {
        if (this.cantidad - cantidad < 0) {
            this.cantidad = 0;
        } else {
            this.cantidad -= cantidad;
        }
    }
}

//PROGRAMA DE PRUEBA
let cuenta1 = new Cuenta("Adrián");
let cuenta2 = new Cuenta("Adrián", 200);

console.log(cuenta1.toString());
console.log(cuenta2.toString());

cuenta2.ingresar(100);
console.log("Después de ingresar 100: ", cuenta2.cantidad);

cuenta2.retirar(10);
console.log("Después de retirar 10: ", cuenta2.cantidad);

cuenta2.retirar(10);
console.log("Después de retirar 10 más: ", cuenta2.cantidad);