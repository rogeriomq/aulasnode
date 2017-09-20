'use strict';

var _opmat = require('./opmat');

var _opmat2 = _interopRequireDefault(_opmat);

var _Aluno = require('./Aluno');

var _Aluno2 = _interopRequireDefault(_Aluno);

var _cidades = require('../cidades.json');

var _cidades2 = _interopRequireDefault(_cidades);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var result_divisao = (0, _opmat2.default)(10, 2);
var result_soma = (0, _opmat.soma)(10, 2);
var result_sub = (0, _opmat.sub)(10, 2);
var result_mult = (0, _opmat.mult)(10, 2);
console.log('result_divisao =', result_divisao, 'result_soma =', result_soma, 'result_sub =', result_sub, 'result_mult =', result_mult);

var aluno = new _Aluno2.default();
aluno.matricula = 118141;
aluno.nome = 'Rogério';
console.log(aluno);
var cidade1 = _cidades2.default[0];
var cidadeNameUF = cidade1.c + ' - ' + cidade1.uf;
console.log(cidade1, cidadeNameUF);
console.log('Total de Cidades:', _cidades2.default.length);