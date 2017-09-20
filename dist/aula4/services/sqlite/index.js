'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leagueModule = undefined;

var _sqliteSync = require('sqlite-sync');

var _sqliteSync2 = _interopRequireDefault(_sqliteSync);

var _league = require('./league');

var _league2 = _interopRequireDefault(_league);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_sqliteSync2.default.connect('league.db');
_sqliteSync2.default.run('CREATE TABLE IF NOT EXISTS' + ' HEROES (ID INTEGER PRIMARY KEY AUTOINCREMENT,' + ' NAMEINT TEXT NOT NULL, NAMEBR TEXT,' + ' CIVILNAME TEXT, NOTA TEXT );');
console.log('SQLITE OK');

var leagueModule = (0, _league2.default)(_sqliteSync2.default);

exports.leagueModule = leagueModule;