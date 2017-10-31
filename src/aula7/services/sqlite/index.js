import sqlite from 'sqlite-sync'
sqlite.connect('league.db')
sqlite.run('CREATE TABLE IF NOT EXISTS'
  + ' HEROES (ID INTEGER PRIMARY KEY AUTOINCREMENT,'
  + ' NAMEINT TEXT NOT NULL, NAMEBR TEXT,'
  + ' CIVILNAME TEXT, NOTA TEXT );'
)
console.log('SQLITE OK')

import league from './league'
const leagueModule = league(sqlite)

export { leagueModule }