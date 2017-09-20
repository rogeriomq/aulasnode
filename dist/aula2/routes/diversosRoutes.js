'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _diversosHandlers = require('./diversosHandlers');

var _diversosHandlers2 = _interopRequireDefault(_diversosHandlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  method: 'GET',
  path: '/',
  handler: _diversosHandlers2.default.home
}, {
  method: 'GET',
  path: '/{name}',
  config: {
    description: 'Retona o nome informado na url'
  },
  handler: _diversosHandlers2.default.getNome
}];