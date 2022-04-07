//Exportar la clase a main.js
export default class Cliente {
    constructor (nombre, impuesto) {
        this._nombre = nombre
        this._impuesto = impuesto
        console.log(nombre)
        console.log(impuesto) 
    }
    
    get getNombre() {
        console.log(`Nombre desde get nombre de class Cliente: ${this._nombre}`)        
        return this._nombre
    }

    set nombre(newNombre) {
        this._nombre = newNombre
    }
}

