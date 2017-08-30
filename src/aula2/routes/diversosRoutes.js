import handlers from './diversosHandlers'
export default [
  {
    method: 'GET',
    path: '/',
    handler: handlers.home
  },
  {
    method: 'GET',
    path: '/{name}',
    config: {
      description: 'Retona o nome informado na url'
    },
    handler: handlers.getNome
  }
]