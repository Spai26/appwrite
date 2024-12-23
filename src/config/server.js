import express from 'express'
import { createServer } from 'node:http'
import cookieParser from 'cookie-parser'
import { AppRoute } from '../modules/routes.js'

export const app = express()

export class ServerRunning {
  _app;
  _server;
  _port;
  _host;
  _enviroment;
  _name_application;

  constructor(options) {
    this._enviroment = options.ENVIROMENT
    this._name_application = options.NAME
    this._host = options.HOST
    this._port = options.PORT

    //initial instance
    this._app = express()
    //http with express
    this._server = createServer(this._app)

    //globals config
    this._app.disable('X-Powered-By')
    this._app.use(express.json())
    this._app.use(express.urlencoded({ extended: true }))
    this._app.use(cookieParser())

    this._app.get('/', (_req, res) => {
      res.json({ message: `Welcome to ${this._name_application}` })
    })
    this._app.use('/api', AppRoute.routes)
  }

  async start() {
    await new Promise((resolve, reject) => {
      this._server.listen(this._port, () => {
        console.log(
          `✓ ${this._name_application} running in ${this._enviroment} mode`,
        )
        if (this._enviroment !== 'production') {
          console.log(`✓ Server running on http://${this._host}:${this._port}`)
        } else {
          console.log(`✓ Server running on ${this._host}:${this._port}`)
        }
        resolve()
      })
      this._server.on('error', (error) => {
        reject(error)
      })
    })
  }
}
