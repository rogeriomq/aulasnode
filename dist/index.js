'use strict';

var _cpfCheck = require('cpf-check');

var _cpfCheck2 = _interopRequireDefault(_cpfCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('VALIDANDO CPF...');
var cpf = '147.326.335-28';
var validacao = _cpfCheck2.default.validate(cpf);
console.log('Validação:', validacao);
console.log(_cpfCheck2.default.generate());