import Hapi from 'hapi'
import blipp from 'blipp'
import hapi_router from 'hapi-router'
const ws = new Hapi.Server() // ws - WebServer
ws.connection({port: 3000})
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
    options: {routes: 'src/aula2/routes/**/*Routes.js'}
  },
  (error) => {
    if (error) throw error
  }
)
ws.start( (error) => {
  if (error) {
    console.log(error)
    throw error
  }
  let url = 'http://'+ws.info.address + ':'+ws.info.port
  console.log('WS rodando em:', url)
})