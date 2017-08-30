exports.home = (request, reply) => {
  reply('Olá, mundo!')
}
exports.getNome = (request, reply) => {
  reply('Olá, ' + request.params.name + '!')
}
