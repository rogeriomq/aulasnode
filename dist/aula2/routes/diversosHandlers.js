'use strict';

exports.home = function (request, reply) {
  reply('Olá, mundo!');
};
exports.getNome = function (request, reply) {
  reply('Olá, ' + request.params.name + '!');
};