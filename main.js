
//Establecimiento de constructores y métodos para Clases
//Clase Cliente
class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre
        this._impuesto = impuesto
    }

    get nombre() {
        return this._nombre
    }

    set nombre(newNombre) {
        this._nombre = newNombre
    }

    calcularImpuesto() {
        const rate = 0.21
        let impCalc = (impuestos1._monto_bruto_anual - impuestos1._deducciones) * rate
        return impCalc
    }
}

//Clase Impuesto
class Impuesto {
    constructor(monto_bruto_anual, deducciones) {
        this._monto_bruto_anual = monto_bruto_anual
        this._deducciones = deducciones
    }

    get monto_bruto_anual() {
        return this._monto_bruto_anual
    }

    set monto_bruto_anual(newMonto_Bruto_Anual) {
        this._monto_bruto_anual = newMonto_Bruto_Anual
    }

    get deducciones() {
        return this._deducciones
    }

    set deducciones(newDeducciones) {
        this._deducciones = newDeducciones
    }
}

let impuestos1 = new Impuesto(100, 60)
let cliente1 = new Cliente('Conny Ntereses De Más', Impuesto)

console.log(`El cliente, Srta./Sra./Sr. ${cliente1._nombre} debe pagar impuestos por un monto toal de $ ${cliente1.calcularImpuesto()}`)












