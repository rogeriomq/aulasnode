import handlers from './cidadeHandlers'

export default [
  {
    method: 'GET',
    path: '/cidades',
    config: {
      description: 'Retona obj.json da cidade de codigo ibge passado via query'
    },
    handler: handlers.cidadeByIBGEID
  },
  {
    method: 'GET',
    path: '/cidades/uf/{txtuf}',
    config: {
      description: 'Retona lista de cidades por UF.'
    },
    handler: handlers.cidadesByUF
  },
  {
    method: 'GET',
    path: '/cidades/like/{txtlike}',
    config: {
      description: 'Retona lista de cidades baseada no textoLike.'
    },
    handler: handlers.cidadesLikeName
  }
]