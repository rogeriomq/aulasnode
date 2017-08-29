import Hapi from 'hapi'
const ws = new Hapi.Server() // ws - WebServer
ws.connection({port: 3000})
ws.start( (error) => {
  if (error) {
    console.log(error)
    throw error
  }
  let url = 'http://'+ws.info.address + ':'+ws.info.port
  console.log('WS rodando em:', url)
})