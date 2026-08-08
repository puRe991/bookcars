import express from 'express'
import routeNames from '../config/newsletterRoutes.config'
import * as newsletterController from '../controllers/newsletterController'

const routes = express.Router()

routes.route(routeNames.subscribe).post(newsletterController.subscribe)
routes.route(routeNames.confirm).post(newsletterController.confirm)
routes.route(routeNames.unsubscribe).post(newsletterController.unsubscribe)

export default routes
