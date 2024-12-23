import { APP } from './config/env.js'
import { ServerRunning } from './config/server.js'


const server = new ServerRunning({
  PORT: APP.port,
  ENVIROMENT: APP.enviroment,
  HOST: APP.host,
  NAME: APP.name,
})

server.start()
