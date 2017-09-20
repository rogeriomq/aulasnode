'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _blipp = require('blipp');

var _blipp2 = _interopRequireDefault(_blipp);

var _hapiRouter = require('hapi-router');

var _hapiRouter2 = _interopRequireDefault(_hapiRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ws = new _hapi2.default.Server(); // ws - WebServer
ws.connection({ port: 3000 });
// registrando plugin de console de rotas
ws.register({ register: _blipp2.default, options: {} }, function (error) {
  if (error) throw error;
});
// registrando plugin de rotas
ws.register({
  register: _hapiRouter2.default,
  options: { routes: 'src/aula4/routes/**/*Routes.js' }
}, function (error) {
  if (error) throw error;
});

ws.start(function (error) {
  if (error) {
    console.log('ERROR:::', error);
    throw error;
  }
  var url = 'http://' + ws.info.address + ':' + ws.info.port;
  console.log('WS rodando em:', url);
});