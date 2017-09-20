'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sqlite) {
  return {
    all: function all() {
      var rows = sqlite.run('SELECT * FROM HEROES');
      console.log('all:', rows);
      return rows;
    },
    insert: function insert(hero) {
      var id = sqlite.insert('HEROES', hero);
      console.log('Inserido com sucesso: id = ', id);
      return id;
    }
  };
};