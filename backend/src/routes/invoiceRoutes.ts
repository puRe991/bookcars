import express from 'express'
import routeNames from '../config/invoiceRoutes.config'
import authJwt from '../middlewares/authJwt'
import * as invoiceController from '../controllers/invoiceController'

const routes = express.Router()

routes.route(routeNames.getMyInvoices).get(authJwt.verifyToken, invoiceController.getMyInvoices)
routes.route(routeNames.download).get(authJwt.verifyToken, invoiceController.download)
routes.route(routeNames.getInvoices).get(authJwt.verifyToken, authJwt.authAdmin, invoiceController.getInvoices)
routes.route(routeNames.createCreditNote).post(authJwt.verifyToken, authJwt.authAdmin, invoiceController.createCreditNote)

export default routes
