export default (sqlite) => (
  {
    all: () => {
      let rows = sqlite.run('SELECT * FROM HEROES')
      console.log('all:', rows)
      return rows
    },
    insert: (hero) => {
      let id = sqlite.insert('HEROES', hero)
      console.log('Inserido com sucesso: id = ', id)
      return id
    }
  }
)
