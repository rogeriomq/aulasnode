import blipp from 'blipp'
import hapi_router from 'hapi-router'
import inert from 'inert'
import Path from 'path'

export default (ws) => {
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