export default class Impuesto {
    constructor(monto_bruto_anual, deducciones) {
        this._monto_bruto_anual = monto_bruto_anual
        this._deducciones = deducciones
    }

    get getMonto_bruto_anual() {
        console.log(`Monto Bruto Anual desde get getMontBruto de class Impuesto: ${this._monto_bruto_anual}`)
        return this._monto_bruto_anual
    }

    set monto_bruto_anual(newMonto_Bruto_Anual) {
        this._monto_bruto_anual = newMonto_Bruto_Anual
    }

    get getDeducciones() {
        console.log(`Monto de las Deducciones desde get getDeducciones de class Impuesto: ${this._deducciones}`)
        return this._deducciones
    }

    set deducciones(nuevasDeducciones) {
        this._deducciones = newDeducciones
    }
}

