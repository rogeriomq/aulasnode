import handlers from './leagueHandlers'
import Joi from 'joi'
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
      description: 'Salvar herói no banco de dados.',
      validate: {
        payload: {
          ID: Joi.number().integer().positive().optional().allow(null ),
          NAMEINT: Joi.string().max(100).min(2).required(),
          NAMEBR: Joi.string().max(100).min(2).optional().allow(null),
          CIVILNAME: Joi.string().max(100).min(2).optional().allow(null),
          NOTA: Joi.string().max(255).min(1).optional().allow(null)
        }
      }
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