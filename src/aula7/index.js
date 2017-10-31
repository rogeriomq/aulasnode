import dot_env from 'dotenv'
import Hapi from 'hapi'
import registerPlugins from './plugins/register-plugins'
dot_env.config()
const ws = new Hapi.Server() // ws - WebServer
console.log('WS_PORT = ', process.env.WS_PORT)
ws.connection({port: process.env.WS_PORT})
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