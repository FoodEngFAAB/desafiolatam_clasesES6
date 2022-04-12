"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Impuesto = /*#__PURE__*/function () {
  function Impuesto(monto_bruto_anual, deducciones) {
    _classCallCheck(this, Impuesto);

    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }

  _createClass(Impuesto, [{
    key: "getMonto_bruto_anual",
    get: function get() {
      console.log("Monto Bruto Anual desde get getMontBruto de class Impuesto: ".concat(this._monto_bruto_anual));
      return this._monto_bruto_anual;
    }
  }, {
    key: "monto_bruto_anual",
    set: function set(newMonto_Bruto_Anual) {
      this._monto_bruto_anual = newMonto_Bruto_Anual;
    }
  }, {
    key: "getDeducciones",
    get: function get() {
      console.log("Monto de las Deducciones desde get getDeducciones de class Impuesto: ".concat(this._deducciones));
      return this._deducciones;
    }
  }, {
    key: "deducciones",
    set: function set(nuevasDeducciones) {
      this._deducciones = newDeducciones;
    }
  }]);

  return Impuesto;
}();

exports["default"] = Impuesto;