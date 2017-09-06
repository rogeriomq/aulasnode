import cidades from '../../cidades'
import deburr from 'lodash.deburr'
exports.cidadeByIBGEID = (request, reply) => {
  if (request.query.ibge) {
    let ibge = Number(request.query.ibge)
    let cidade = cidades.find((c) => (c.i === ibge))
    // ou
    // let cidade = cidades.find((c) => {
    //   return c.i === ibg
    // })
    reply(cidade === undefined ? {} : cidade)
  }
  else {
    reply({error: 'Query ERROR - ibge não encontrado.'})
  }
}

exports.cidadesByUF = (request, reply) => {
  let uf = deburr(request.params.txtuf.toLowerCase())
  let cidadesuf = cidades.filter( city => (city.u.toLowerCase() === uf) )
  /*// ou
  let cidadesuf = cidades.filter( city => {
    return (city.u.toLowerCase() === uf)
    // ou
    if (city.u.toLowerCase() === uf) return city
  })*/
  reply(cidadesuf)
}
exports.cidadesLikeName = (request, reply) => {
  let txtlike = deburr(request.params.txtlike).toLowerCase()
  let cidadesLike = cidades.filter( city => (deburr(city.c.toLowerCase()).includes(txtlike)) )
  reply(cidadesLike)
}