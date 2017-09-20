'use strict';

var _sqlite = require('../services/sqlite');

exports.getAll = function (request, reply) {
  var result = _sqlite.leagueModule.all();
  reply(result);
};

exports.insertHero = function (request, reply) {
  console.log(request.payload);
  var hero = request.payload;
  if (hero) {
    var id = _sqlite.leagueModule.insert(hero);
    reply(id);
  } else {
    reply({ error: 'ERROR' });
  }
};