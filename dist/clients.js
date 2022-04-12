"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

//Exportar la clase a main.js
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    this._nombre = nombre;
    this._impuesto = impuesto;
    console.log(nombre);
    console.log(impuesto);
  }

  _createClass(Cliente, [{
    key: "getNombre",
    get: function get() {
      console.log("Nombre desde get nombre de class Cliente: ".concat(this._nombre));
      return this._nombre;
    }
  }, {
    key: "nombre",
    set: function set(newNombre) {
      this._nombre = newNombre;
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;