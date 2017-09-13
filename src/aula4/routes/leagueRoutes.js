import handlers from './leagueHandlers'

export default [
  {
    method: 'GET',
    path: '/heroes/league/all',
    config: {
      description: 'Retona todos os membros da liga!'
    },
    handler: handlers.getAll
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
    handler: handlers.insertHero
  },
  // {
  //   method: 'PUT',
  //   path: '/heroes/league/heroes',
  //   config: {
  //     description: 'Retorna o herói pelo nome.'
  //   },
  //   handler: handlers.updateHero
  // },
]