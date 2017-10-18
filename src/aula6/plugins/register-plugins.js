import blipp from 'blipp'
import hapi_router from 'hapi-router'
import inert from 'inert'
import Path from 'path'
import hapi_auth_basic from 'hapi-auth-basic'
// constante para simular uma busca no banco de dados.
const arrayUsers = [
  {id: 1, username: 'rogeriomq', pass: '123'},
  {id: 2, username: 'jose', pass: '111'},
  {id: 2, username: 'zebedeu', pass: 'zebedeu'}
]
const validate = (request, username, password, callback) => {
  // simulando uma busca do user/pass no banco de dados
  let user = arrayUsers.find((e) => 
    (e.username === username && e.pass === password)
  )
  console.log(`user find is: ${JSON.stringify(user)}`)
  if (user !== null && user !== undefined)
    callback(null, true, {id: user.id, username: user.username})
  else
    callback('Credenciais inválidas!', false)
}

export default (ws) => {
// registrando plugin de autenticação basica
ws.register(hapi_auth_basic, (error) => {
  if (error) throw error
  ws.auth.strategy('simple', 'basic', true, { validateFunc: validate})
})
// registrando plugin de console de rotas
  ws.register(
    {register: blipp, options: {}},
    (error) => {
      if (error) throw error
    }
  )
// registrando plugin de rotas
  ws.register(
    {
      register: hapi_router, 
      options: {routes: 'src/aula5/routes/**/*Routes.js'}
    },
    (error) => {
      if (error) throw error
    }
  )
  ws.register(
    {
      register: inert
    },
    (error) => {
      if (error) throw error
      console.log(__dirname)
      ws.route({
        method: 'GET',
        path: '/ws/{param*}',
        config: {
          auth: false
        },
        handler: (request, reply) => {
          let logBlipp = ws.plugins.blipp.info()
          reply('<html><b><pre>'+ JSON.stringify(logBlipp) + '</pre></b></html>')
        }
        // handler: function (request, reply) {
        //     reply.file(Path.join(__dirname, '../www/index.html'))
        // }
        // handler: {
        //   directory: {
        //     path: Path.join(__dirname, '../www'),
        //     listing: true
        //   }
        // }
      })
    }
  )
}