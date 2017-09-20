'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cidadeHandlers = require('./cidadeHandlers');

var _cidadeHandlers2 = _interopRequireDefault(_cidadeHandlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  method: 'GET',
  path: '/cidades',
  config: {
    description: 'Retona obj.json da cidade de codigo ibge passado via query'
  },
  handler: _cidadeHandlers2.default.cidadeByIBGEID
}, {
  method: 'GET',
  path: '/cidades/uf/{txtuf}',
  config: {
    description: 'Retona lista de cidades por UF.'
  },
  handler: _cidadeHandlers2.default.cidadesByUF
}, {
  method: 'GET',
  path: '/cidades/like/{txtlike}',
  config: {
    description: 'Retona lista de cidades baseada no textoLike.'
  },
  handler: _cidadeHandlers2.default.cidadesLikeName
}];