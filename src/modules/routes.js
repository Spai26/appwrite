import { Router } from 'express'
import { AuthRoute } from './auth/routes.js'

export class AppRoute {
  static get routes() {
    const router = Router()

    router.use('/auth', AuthRoute.routes)
    return router
  }
}
