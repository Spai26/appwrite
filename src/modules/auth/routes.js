import { Router } from 'express'
import { createUser } from './controller.js'

export class AuthRoute {
  static get routes() {
    const router = Router()

    router.post('/signup', createUser)
    return router
  }
}
