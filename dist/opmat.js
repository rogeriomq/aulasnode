"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x, y) {
  return x / y;
};

function soma(x, y) {
  return x + y;
}
var sub = exports.sub = function sub(x, y) {
  return x - y;
};
var mult = function mult(x, y) {
  return x * y;
};
// exemplo de export seletivo
exports.soma = soma;
exports.mult = mult;