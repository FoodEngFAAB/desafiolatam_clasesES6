"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

//Establecimiento de constructores y métodos para Clases
//Clase Cliente
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(newNombre) {
      this._nombre = newNombre;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      var rate = 0.21;
      var impCalc = (impuestos1._monto_bruto_anual - impuestos1._deducciones) * rate;
      return impCalc;
    }
  }]);

  return Cliente;
}(); //Clase Impuesto


var Impuesto = /*#__PURE__*/function () {
  function Impuesto(monto_bruto_anual, deducciones) {
    _classCallCheck(this, Impuesto);

    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }

  _createClass(Impuesto, [{
    key: "monto_bruto_anual",
    get: function get() {
      return this._monto_bruto_anual;
    },
    set: function set(newMonto_Bruto_Anual) {
      this._monto_bruto_anual = newMonto_Bruto_Anual;
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(newDeducciones) {
      this._deducciones = newDeducciones;
    }
  }]);

  return Impuesto;
}();

var impuestos1 = new Impuesto(100, 60);
var cliente1 = new Cliente('Conny Ntereses De Más', Impuesto);
console.log("El cliente, Srta./Sra./Sr. ".concat(cliente1._nombre, " debe pagar impuestos por un monto toal de $ ").concat(cliente1.calcularImpuesto()));