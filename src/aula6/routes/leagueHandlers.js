import { leagueModule } from '../services/sqlite'
import boom from 'boom'
exports.getAll = (request, reply) => {
  let result = leagueModule.all()
  reply(result)
}

exports.insertHero = (request, reply) => {
  console.log(request.payload)
  let hero = request.payload
  if (hero) {
    let id = leagueModule.insert(hero)
    reply(id)
  }
  else {
    reply(boom.notFound())
  }
}