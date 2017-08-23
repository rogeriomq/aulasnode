'use strict';

var _opmat = require('./opmat');

var _opmat2 = _interopRequireDefault(_opmat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var result_divisao = (0, _opmat2.default)(10, 2);
var result_soma = (0, _opmat.soma)(10, 2);
var result_sub = (0, _opmat.sub)(10, 2);
var result_mult = (0, _opmat.mult)(10, 2);
console.log('result_divisao =', result_divisao, 'result_soma =', result_soma, 'result_sub =', result_sub, 'result_mult =', result_mult);