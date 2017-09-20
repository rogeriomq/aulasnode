'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _leagueHandlers = require('./leagueHandlers');

var _leagueHandlers2 = _interopRequireDefault(_leagueHandlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  method: 'GET',
  path: '/heroes/league/all',
  config: {
    description: 'Retona todos os membros da liga!'
  },
  handler: _leagueHandlers2.default.getAll
},
// {
//   method: 'GET',
//   path: '/heroes/league/hero/{name}',
//   config: {
//     description: 'Retorna o herói pelo nome.'
//   },
//   handler: handlers.getByName
// },
// {
//   method: 'GET',
//   path: '/heroes/league/hero/id/{id}',
//   config: {
//     description: 'Retorna o herói pelo nome.'
//   },
//   handler: handlers.getById
// },
{
  method: 'POST',
  path: '/heroes/league/heroes',
  config: {
    description: 'Salvar herói no banco de dados.'
  },
  handler: _leagueHandlers2.default.insertHero
}];