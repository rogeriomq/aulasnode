'use strict';

var _cidades = require('../../cidades');

var _cidades2 = _interopRequireDefault(_cidades);

var _lodash = require('lodash.deburr');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.cidadeByIBGEID = function (request, reply) {
  if (request.query.ibge) {
    var ibge = Number(request.query.ibge);
    var cidade = _cidades2.default.find(function (c) {
      return c.i === ibge;
    });
    // ou
    // let cidade = cidades.find((c) => {
    //   return c.i === ibg
    // })
    reply(cidade === undefined ? {} : cidade);
  } else {
    reply({ error: 'Query ERROR - ibge não encontrado.' });
  }
};

exports.cidadesByUF = function (request, reply) {
  var uf = (0, _lodash2.default)(request.params.txtuf.toLowerCase());
  var cidadesuf = _cidades2.default.filter(function (city) {
    return city.u.toLowerCase() === uf;
  });
  /*// ou
  let cidadesuf = cidades.filter( city => {
    return (city.u.toLowerCase() === uf)
    // ou
    if (city.u.toLowerCase() === uf) return city
  })*/
  reply(cidadesuf);
};
exports.cidadesLikeName = function (request, reply) {
  var txtlike = (0, _lodash2.default)(request.params.txtlike).toLowerCase();
  var cidadesLike = _cidades2.default.filter(function (city) {
    return (0, _lodash2.default)(city.c.toLowerCase()).includes(txtlike);
  });
  reply(cidadesLike);
};