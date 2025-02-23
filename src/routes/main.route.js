import express from 'express'
import { renderPage } from '../controllers/controller.js'

const router = express.Router()

router.get('/', renderPage)

export default router