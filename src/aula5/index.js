import Hapi from 'hapi'
import registerPlugins from './plugins/register-plugins'
const ws = new Hapi.Server() // ws - WebServer
ws.connection({port: 3000})
//funcao que registra todos os plugins
registerPlugins(ws)
//start do server.
ws.start( (error) => {
  if (error) {
    console.log('ERROR:::', error)
    throw error
  }
  let url = 'http://'+ws.info.address + ':'+ws.info.port
  console.log('WS rodando em:', url)
})