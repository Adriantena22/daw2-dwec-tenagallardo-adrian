export default class Cuenta {
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

    getCantidad() {
        return this._cantidad;
    }

    setCantidad(nuevaCantidad) {
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